import { NextFunction, Request, Response } from "express";
import { Role } from "../../generated/prisma/enums";
export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        role: Role;
    };
}
export declare const auth: (...allowedRoles: Role[]) => (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.d.ts.map