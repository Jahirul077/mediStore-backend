export declare const categoriesService: {
    createCategory: (payload: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").CategoryStatus;
        title: string;
        description: string | null;
    }>;
    getAllCategories: (options: any) => Promise<{
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
            status: import("../../../generated/prisma/enums").CategoryStatus;
            title: string;
            description: string | null;
        }[];
    }>;
    updateCategory: (id: string, payload: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").CategoryStatus;
        title: string;
        description: string | null;
    }>;
    deleteCategory: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").CategoryStatus;
        title: string;
        description: string | null;
    }>;
};
//# sourceMappingURL=categories.service.d.ts.map