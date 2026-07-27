export declare const reviewsService: {
    createReview: (customerId: string, payload: {
        rating: number;
        comment: string;
        medicinesId: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        medicinesId: string;
        customerId: string;
        rating: number;
        comment: string;
    }>;
    updateReview: (reviewId: string, customerId: string, payload: {
        rating?: number;
        comment?: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        medicinesId: string;
        customerId: string;
        rating: number;
        comment: string;
    }>;
    deleteReview: (reviewId: string, user: {
        id: string;
        role: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        medicinesId: string;
        customerId: string;
        rating: number;
        comment: string;
    }>;
    getReviewsByMedicineId: (medicineId: string) => Promise<{
        id: string;
        createdAt: Date;
        customer: {
            id: string;
            name: string;
        };
        rating: number;
        comment: string;
    }[]>;
};
//# sourceMappingURL=reviews.service.d.ts.map