export declare const medicinesService: {
    getAllMedicines: (query: any) => Promise<{
        id: string;
        image: string;
        title: string;
        genericName: string | null;
        strength: string | null;
        categories: {
            id: string;
            title: string;
        };
    }[]>;
    getMedicineById: (id: string) => Promise<{
        id: string;
        image: string;
        inventories: {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            stock: number;
            seller: {
                id: string;
                name: string;
                email: string;
            };
        }[];
        title: string;
        genericName: string | null;
        strength: string | null;
        description: string;
        manufacturer: string;
        categories: {
            id: string;
            title: string;
        };
    }>;
};
//# sourceMappingURL=medicines.service.d.ts.map