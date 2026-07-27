export declare const paymentService: {
    createPaymentIntent: (orderId: string, successUrl: string, cancelUrl: string) => Promise<{
        paymentUrl: string | null;
    }>;
    handleWebhook: (rawBody: Buffer, signature: string) => Promise<void>;
    verifyPayment: (sessionId: string) => Promise<{
        status: string;
        order: {
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
        };
    } | {
        status: import("stripe/cjs/resources/Checkout").Session.PaymentStatus;
        order?: never;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map