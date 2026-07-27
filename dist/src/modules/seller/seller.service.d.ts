export declare const sellerService: {
    addMedicineToInventory: (sellerId: string, payload: any) => Promise<{
        medicines: {
            id: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            genericName: string | null;
            strength: string | null;
            description: string;
            manufacturer: string;
            categoriesId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        stock: number;
        sellerId: string;
        medicinesId: string;
    }>;
    getSellerInventory: (sellerId: string) => Promise<({
        medicines: {
            categories: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: import("../../../generated/prisma/enums").CategoryStatus;
                title: string;
                description: string | null;
            };
        } & {
            id: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            genericName: string | null;
            strength: string | null;
            description: string;
            manufacturer: string;
            categoriesId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        stock: number;
        sellerId: string;
        medicinesId: string;
    })[]>;
    updateMedicineInInventory: (inventoryId: string, sellerId: string, payload: any) => Promise<{
        medicines: {
            id: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            genericName: string | null;
            strength: string | null;
            description: string;
            manufacturer: string;
            categoriesId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        stock: number;
        sellerId: string;
        medicinesId: string;
    }>;
    deleteMedicineFromInventory: (inventoryId: string, sellerId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        stock: number;
        sellerId: string;
        medicinesId: string;
    }>;
};
//# sourceMappingURL=seller.service.d.ts.map