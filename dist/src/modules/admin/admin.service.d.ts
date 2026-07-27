import { Role, UserStatus } from "../../../generated/prisma/enums";
export declare const adminService: {
    getAllUsers: () => Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        phone: string | null;
        status: UserStatus;
    }[]>;
    updateUserStatus: (userId: string, status: UserStatus) => Promise<{
        id: string;
        name: string;
        email: string;
        updatedAt: Date;
        role: Role;
        status: UserStatus;
    }>;
    getAdminStats: () => Promise<{
        totalRevenue: number;
        totalUsers: number;
        totalMedicines: number;
        totalOrders: number;
        userCounts: {
            customer: number;
            seller: number;
            admin: number;
        };
        orderStatusBreakdown: Record<string, number>;
        paymentStatusBreakdown: Record<string, number>;
        recentOrders: {
            id: string;
            createdAt: Date;
            status: import("../../../generated/prisma/enums").OrderStatus;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
            customer: {
                id: string;
                name: string;
                email: string;
            };
        }[];
    }>;
    getAdminOrders: (query: {
        page?: number | undefined;
        limit?: number | undefined;
        status?: string | undefined;
        paymentStatus?: string | undefined;
    }) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../../generated/prisma/enums").OrderStatus;
            orderItems: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                sellerInventory: {
                    id: string;
                    price: import("@prisma/client-runtime-utils").Decimal;
                    seller: {
                        id: string;
                        name: string;
                        email: string;
                    };
                    medicines: {
                        id: string;
                        image: string;
                        title: string;
                        genericName: string | null;
                        strength: string | null;
                        manufacturer: string;
                    };
                };
                quantity: number;
            }[];
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            shipping_Address: string;
            paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
            paymentIntentId: string | null;
            transactionId: string | null;
            customer: {
                id: string;
                name: string;
                email: string;
                phone: string | null;
            };
            customerId: string;
        }[];
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map