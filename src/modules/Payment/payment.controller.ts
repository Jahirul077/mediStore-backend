import { NextFunction, Request, Response } from "express";
import { paymentService } from "./payment.service";

const createPaymentIntent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      throw new Error("Order Id is required");
    }

    const result = await paymentService.createPaymentIntent(orderId);

    res.status(200).json({
      success: true,
      message: "Payment intent created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const paymentController = {
  createPaymentIntent,
};
