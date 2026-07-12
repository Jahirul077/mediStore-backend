import { NextFunction, Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
import { reviewsService } from "./reviews.service";

const createReview = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const customerId = req.user?.id;

    if (!customerId) {
      throw new Error("Customer ID is missing from token");
    }

    const result = await reviewsService.createReview(customerId, req.body);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateReview = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const customerId = req.user?.id;

    if (!customerId) {
      throw new Error("Customer ID is missing from token");
    }

    const result = await reviewsService.updateReview(
      id as string,
      customerId,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteReview = async (
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

    const result = await reviewsService.deleteReview(id as string, user);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error: any) {
    next(error);
  }
};

export const reviewsController = {
  createReview,
  updateReview,
  deleteReview,
};
