import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
export declare const authController: {
    signUpUser: (req: Request, res: Response) => Promise<void>;
    signInUser: (req: Request, res: Response) => Promise<void>;
    getCurrentUser: (req: AuthRequest, res: Response) => Promise<void>;
    logoutUser: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map