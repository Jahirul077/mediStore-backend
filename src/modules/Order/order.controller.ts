import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";
import { AuthRequest } from "../../middlewares/auth";

const createOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const customerId = req.user?.id as string;

    if (!customerId) {
      throw new Error("Customer ID is missing from token");
    }

    const result = await orderService.createOrder(customerId, req.body);
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getCustomerOrders = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const customerId = req.user?.id as string;
    if (!customerId) {
      throw new Error("Customer ID is missing from token");
    }

    const Result = await orderService.getCustomerOrders(customerId);
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      data: Result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getOrderById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const user = req.user;

    if (!user) {
      throw new Error("User information is missing from token");
    }

    const result = await orderService.getOrderById(id as string, user);

    res.status(200).json({
      success: true,
      message: "Order retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getSellerOrders = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sellerId = req.user?.id;

    if (!sellerId) {
      throw new Error("Seller ID is missing from token");
    }

    const result = await orderService.getSellerOrders(sellerId as string);
    res.status(200).json({
      success: true,
      message: "Seller orders retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateOrderStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;

    if (!user) {
      throw new Error("User information is missing from token");
    }

    const result = await orderService.updateOrderStatus(
      id as string,
      user,
      status,
    );

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const orderController = {
  createOrder,
  getCustomerOrders,
  getOrderById,
  getSellerOrders,
  updateOrderStatus,
};
