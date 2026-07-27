"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsController = void 0;
const reviews_service_1 = require("./reviews.service");
const createReview = async (req, res, next) => {
    try {
        const customerId = req.user?.id;
        if (!customerId) {
            throw new Error("Customer ID is missing from token");
        }
        const result = await reviews_service_1.reviewsService.createReview(customerId, req.body);
        res.status(201).json({
            success: true,
            message: "Review created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const customerId = req.user?.id;
        if (!customerId) {
            throw new Error("Customer ID is missing from token");
        }
        const result = await reviews_service_1.reviewsService.updateReview(id, customerId, req.body);
        res.status(200).json({
            success: true,
            message: "Review updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = req.user;
        if (!user) {
            throw new Error("User information is missing from token");
        }
        const result = await reviews_service_1.reviewsService.deleteReview(id, user);
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
const getReviewsByMedicineId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await reviews_service_1.reviewsService.getReviewsByMedicineId(id);
        res.status(200).json({
            success: true,
            message: "Reviews retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.reviewsController = {
    createReview,
    updateReview,
    deleteReview,
    getReviewsByMedicineId,
};
//# sourceMappingURL=reviews.controller.js.map