"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = async (req, res, next) => {
    try {
        const customerId = req.user?.id;
        if (!customerId) {
            throw new Error("Customer ID is missing from token");
        }
        const result = await order_service_1.orderService.createOrder(customerId, req.body);
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getCustomerOrders = async (req, res, next) => {
    try {
        const customerId = req.user?.id;
        if (!customerId) {
            throw new Error("Customer ID is missing from token");
        }
        const Result = await order_service_1.orderService.getCustomerOrders(customerId);
        res.status(200).json({
            success: true,
            message: "Orders retrieved successfully",
            data: Result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = req.user;
        if (!user) {
            throw new Error("User information is missing from token");
        }
        const result = await order_service_1.orderService.getOrderById(id, user);
        res.status(200).json({
            success: true,
            message: "Order retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getSellerOrders = async (req, res, next) => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            throw new Error("Seller ID is missing from token");
        }
        const result = await order_service_1.orderService.getSellerOrders(sellerId);
        res.status(200).json({
            success: true,
            message: "Seller orders retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateOrderStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const user = req.user;
        if (!user) {
            throw new Error("User information is missing from token");
        }
        const result = await order_service_1.orderService.updateOrderStatus(id, user, status);
        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.orderController = {
    createOrder,
    getCustomerOrders,
    getOrderById,
    getSellerOrders,
    updateOrderStatus,
};
//# sourceMappingURL=order.controller.js.map