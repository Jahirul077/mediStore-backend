import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
export declare const reviewsController: {
    createReview: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    updateReview: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    deleteReview: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
    getReviewsByMedicineId: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=reviews.controller.d.ts.map