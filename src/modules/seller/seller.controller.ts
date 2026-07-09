import { Request, Response, NextFunction } from "express";
import { sellerService } from "./seller.service";
import { AuthRequest } from "../../middlewares/auth";

const addMedicineToInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sellerId = req.user?.id;

    if (!sellerId) {
      throw new Error("Seller ID is missing from token");
    }

    const result = await sellerService.addMedicineToInventory(
      sellerId as string,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Medicine added to inventory successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getSellerInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sellerId = req.user?.id;

    if (!sellerId) {
      throw new Error("Seller ID is missing from token");
    }

    const result = await sellerService.getSellerInventory(sellerId as string);
    res.status(200).json({
      success: true,
      message: "Seller inventory retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateMedicineInInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sellerId = req.user?.id;
    const { id } = req.params;

    if (!sellerId) {
      throw new Error("Seller ID is missing from token");
    }

    const result = await sellerService.updateMedicineInInventory(
      id as string,
      sellerId as string,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Medicine updated in inventory successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteMedicineFromInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sellerId = req.user?.id;
    const { id } = req.params;

    const result = await sellerService.deleteMedicineFromInventory(
      id as string,
      sellerId as string,
    );

    res.status(200).json({
      success: true,
      message: "Medicine deleted from inventory successfully",
    });
  } catch (error: any) {
    next(error);
  }
};

export const sellerController = {
  addMedicineToInventory,
  getSellerInventory,
  updateMedicineInInventory,
  deleteMedicineFromInventory,
};
