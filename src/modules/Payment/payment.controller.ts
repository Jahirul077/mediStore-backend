import { NextFunction, Request, Response } from "express";
import { paymentService } from "./payment.service";

const createPaymentIntent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { orderId, successUrl, cancelUrl } = req.body;

    if (!orderId) {
      throw new Error("Order Id is required");
    }

    if (!successUrl || !cancelUrl) {
      throw new Error("successUrl and cancelUrl are required");
    }

    const result = await paymentService.createPaymentIntent(
      orderId,
      successUrl,
      cancelUrl,
    );

    res.status(200).json({
      success: true,
      message: "Payment intent created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const handleWebhook = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const signature = req.headers["stripe-signature"] as string;

    const rawBody = (req as any).rawBody;

    if (!rawBody || !signature) {
      res.status(400).send("Missing raw body or signature");
      return;
    }

    await paymentService.handleWebhook(rawBody, signature);

    res.status(200).json({ received: true });
  } catch (error) {
    next(error);
  }
};

const verifyPayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      throw new Error("Session Id is required");
    }

    const result = await paymentService.verifyPayment(sessionId as string);

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const paymentController = {
  createPaymentIntent,
  handleWebhook,
  verifyPayment,
};
