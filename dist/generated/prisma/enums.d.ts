export declare const Role: {
    readonly CUSTOMER: "CUSTOMER";
    readonly SELLER: "SELLER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BANNED: "BANNED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const OrderStatus: {
    readonly PLACED: "PLACED";
    readonly PROCESSING: "PROCESSING";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const CategoryStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DISABLED: "DISABLED";
};
export type CategoryStatus = (typeof CategoryStatus)[keyof typeof CategoryStatus];
//# sourceMappingURL=enums.d.ts.map