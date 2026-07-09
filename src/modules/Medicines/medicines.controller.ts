import { NextFunction, Request, Response } from "express";
import { medicinesService } from "./medicines.service";

const getAllMedicines = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await medicinesService.getAllMedicines(req.query);
    res.status(200).json({
      success: true,
      message: "Medicines retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getMedicineById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const result = await medicinesService.getMedicineById(id as string);

    res.status(200).json({
      success: true,
      message: "Medicine retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const medicinesController = {
  getAllMedicines,
  getMedicineById
};
