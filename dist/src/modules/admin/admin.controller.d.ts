import { NextFunction, Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
export declare const adminController: {
    getAllUsers: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    updateUserStatus: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getAdminStats: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getAdminOrders: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map