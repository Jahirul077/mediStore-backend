export declare const orderService: {
    createOrder: (customerId: string, payload: {
        shipping_Address: string;
        items: {
            SellerInventoryId: string;
            quantity: number;
        }[];
    }) => Promise<{
        id: string;
        createdAt: Date;
        status: import("../../../generated/prisma/enums").OrderStatus;
        orderItems: {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            sellerInventory: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
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
        customerId: string;
    }>;
    getCustomerOrders: (customerId: string) => Promise<{
        id: string;
        createdAt: Date;
        status: import("../../../generated/prisma/enums").OrderStatus;
        orderItems: {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            sellerInventory: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
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
        customerId: string;
    }[]>;
    getOrderById: (id: string, user: {
        id: string;
        role: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        status: import("../../../generated/prisma/enums").OrderStatus;
        orderItems: {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            sellerInventory: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
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
        customerId: string;
    }>;
    getSellerOrders: (sellerId: string) => Promise<{
        id: string;
        createdAt: Date;
        status: import("../../../generated/prisma/enums").OrderStatus;
        orderItems: {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            sellerInventory: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
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
        customer: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
        };
        customerId: string;
    }[]>;
    updateOrderStatus: (orderId: string, user: {
        id: string;
        role: string;
    }, status: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").OrderStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        shipping_Address: string;
        paymentStatus: import("../../../generated/prisma/enums").PaymentStatus;
        paymentIntentId: string | null;
        transactionId: string | null;
        customerId: string;
    }>;
};
//# sourceMappingURL=order.service.d.ts.map