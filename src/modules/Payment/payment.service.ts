import Stripe from "stripe";
import { prisma } from "../../lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const createPaymentIntent = async (
  orderId: string,
  successUrl: string,
  cancelUrl: string,
) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  const amountInCents = Math.round(Number(order.totalAmount) * 100);

  const finalSuccessUrl = successUrl.includes("CHECKOUT_SESSION_ID")
    ? successUrl
    : `${successUrl}?session_id={CHECKOUT_SESSION_ID}`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Payment for Order #${orderId}`,
          },
          unit_amount: amountInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: finalSuccessUrl,
    cancel_url: cancelUrl,
    metadata: {
      orderId,
    },
  });

  await prisma.order.update({
    where: { id: orderId },
    data: {
      paymentIntentId: session.id,
    },
  });

  return {
    paymentUrl: session.url,
  };
};

const handleWebhook = async (rawBody: Buffer, signature: string) => {
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: any) {
    throw new Error(`Webhook Signature Verification Failed: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (orderId) {
      await prisma.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentStatus: "COMPLETED",
          transactionId:
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : null,
        },
      });
      console.log(`Order ${orderId} status updated to COMPLETED`);
    }
  }
};

export const paymentService = {
  createPaymentIntent,
  handleWebhook,
};
