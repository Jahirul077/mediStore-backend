import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middlewares/auth";
export declare const sellerController: {
    addMedicineToInventory: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getSellerInventory: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    updateMedicineInInventory: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    deleteMedicineFromInventory: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=seller.controller.d.ts.map