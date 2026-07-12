import { NextFunction, Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
import { adminService } from "./admin.service";

const getAllUsers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await adminService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateUserStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const { status } = req.body;
    const result = await adminService.updateUserStatus(id as string, status);
    res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const adminController = {
  getAllUsers,
  updateUserStatus,
};
