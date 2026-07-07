import { Request, Response } from "express";
import { sellerService } from "./seller.service";

const addMedicineToInventory = async (req: Request, res: Response) => {
  try {
    const { sellerId } = req.params;

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
    res.status(400).json({
      success: false,
      message: error.message || "Failed to add medicine to inventory",
    });
  }
};

export const sellerController = { addMedicineToInventory };
