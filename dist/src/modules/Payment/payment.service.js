"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const stripe_1 = __importDefault(require("stripe"));
const prisma_1 = require("../../lib/prisma");
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
const createPaymentIntent = async (orderId, successUrl, cancelUrl) => {
    const order = await prisma_1.prisma.order.findUnique({
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
    await prisma_1.prisma.order.update({
        where: { id: orderId },
        data: {
            paymentIntentId: session.id,
        },
    });
    return {
        paymentUrl: session.url,
    };
};
const handleWebhook = async (rawBody, signature) => {
    let event;
    try {
        event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);
    }
    catch (error) {
        throw new Error(`Webhook Signature Verification Failed: ${error.message}`);
    }
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;
        if (orderId) {
            await prisma_1.prisma.order.update({
                where: {
                    id: orderId,
                },
                data: {
                    paymentStatus: "COMPLETED",
                    transactionId: typeof session.payment_intent === "string"
                        ? session.payment_intent
                        : null,
                },
            });
            console.log(`Order ${orderId} status updated to COMPLETED`);
        }
    }
};
const verifyPayment = async (sessionId) => {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session?.payment_status === "paid") {
        const orderId = session?.metadata?.orderId;
        if (orderId) {
            const updateOrder = await prisma_1.prisma.order.update({
                where: {
                    id: orderId,
                },
                data: {
                    paymentStatus: "COMPLETED",
                    transactionId: typeof session.payment_intent === "string"
                        ? session.payment_intent
                        : null,
                },
            });
            return {
                status: "paid",
                order: updateOrder,
            };
        }
    }
    return {
        status: session?.payment_status,
    };
};
exports.paymentService = {
    createPaymentIntent,
    handleWebhook,
    verifyPayment,
};
//# sourceMappingURL=payment.service.js.map