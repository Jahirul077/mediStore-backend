import { NextFunction, Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
export declare const orderController: {
    createOrder: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getCustomerOrders: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getOrderById: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getSellerOrders: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    updateOrderStatus: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map