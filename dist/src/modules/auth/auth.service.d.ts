import { Role } from "../../../generated/prisma/enums";
export declare const authService: {
    signUpUser: (payload: any) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        role: Role;
        phone: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
    }>;
    signInUser: (payload: any) => Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            image: string | null;
            role: Role;
            phone: string | null;
            status: "ACTIVE";
            emailVerified: boolean;
        };
        token: string;
    }>;
    getCurrentUser: (id: string) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        role: Role;
        phone: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map