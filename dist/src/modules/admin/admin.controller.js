"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const admin_service_1 = require("./admin.service");
const getAllUsers = async (req, res, next) => {
    try {
        const result = await admin_service_1.adminService.getAllUsers();
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateUserStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const result = await admin_service_1.adminService.updateUserStatus(id, status);
        res.status(200).json({
            success: true,
            message: "User status updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getAdminStats = async (req, res, next) => {
    try {
        const result = await admin_service_1.adminService.getAdminStats();
        res.status(200).json({
            success: true,
            message: "Admin statistics retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getAdminOrders = async (req, res, next) => {
    try {
        const { page, limit, status, paymentStatus } = req.query;
        const result = await admin_service_1.adminService.getAdminOrders({
            page: page ? Number(page) : undefined,
            limit: limit ? Number(limit) : undefined,
            status: status,
            paymentStatus: paymentStatus,
        });
        res.status(200).json({
            success: true,
            message: "Admin orders retrieved successfully",
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.adminController = {
    getAllUsers,
    updateUserStatus,
    getAdminStats,
    getAdminOrders,
};
//# sourceMappingURL=admin.controller.js.map