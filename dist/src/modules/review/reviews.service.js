"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsService = void 0;
const prisma_1 = require("../../lib/prisma");
const createReview = async (customerId, payload) => {
    const { rating, comment, medicinesId } = payload;
    if (rating < 1 || rating > 5) {
        throw new Error("Rating must be between 1 and 5");
    }
    const hasOrdered = await prisma_1.prisma.order.findFirst({
        where: {
            customerId: customerId,
            orderItems: {
                some: {
                    sellerInventory: {
                        medicinesId: medicinesId,
                    },
                },
            },
        },
    });
    if (!hasOrdered) {
        throw new Error("You can only review medicines you have ordered");
    }
    return await prisma_1.prisma.review.create({
        data: { customerId, medicinesId, rating: Number(rating), comment },
    });
};
const updateReview = async (reviewId, customerId, payload) => {
    const { rating, comment } = payload;
    const review = await prisma_1.prisma.review.findUnique({
        where: {
            id: reviewId,
        },
    });
    if (!review) {
        throw new Error("Review not found1");
    }
    if (review.customerId !== customerId) {
        throw new Error("Unauthorized to update this review");
    }
    if (rating !== undefined && (rating < 1 || rating > 5)) {
        throw new Error("Rating must be between 1 and 5");
    }
    const updateData = {};
    if (rating !== undefined) {
        updateData.rating = Number(rating);
    }
    if (comment !== undefined) {
        updateData.comment = comment;
    }
    return await prisma_1.prisma.review.update({
        where: {
            id: reviewId,
        },
        data: updateData,
    });
};
const deleteReview = async (reviewId, user) => {
    const review = await prisma_1.prisma.review.findUnique({
        where: {
            id: reviewId,
        },
    });
    if (!review) {
        throw new Error("Review not found");
    }
    if (user.role !== "ADMIN" && review.customerId !== user.id) {
        throw new Error("Unauthorized to delete this review");
    }
    return await prisma_1.prisma.review.delete({
        where: { id: reviewId },
    });
};
const getReviewsByMedicineId = async (medicineId) => {
    return await prisma_1.prisma.review.findMany({
        where: {
            medicinesId: medicineId,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            createdAt: true,
            customer: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.reviewsService = {
    createReview,
    updateReview,
    deleteReview,
    getReviewsByMedicineId,
};
//# sourceMappingURL=reviews.service.js.map