"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerController = void 0;
const seller_service_1 = require("./seller.service");
const addMedicineToInventory = async (req, res, next) => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            throw new Error("Seller ID is missing from token");
        }
        const result = await seller_service_1.sellerService.addMedicineToInventory(sellerId, req.body);
        res.status(201).json({
            success: true,
            message: "Medicine added to inventory successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getSellerInventory = async (req, res, next) => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            throw new Error("Seller ID is missing from token");
        }
        const result = await seller_service_1.sellerService.getSellerInventory(sellerId);
        res.status(200).json({
            success: true,
            message: "Seller inventory retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateMedicineInInventory = async (req, res, next) => {
    try {
        const sellerId = req.user?.id;
        const { id } = req.params;
        if (!sellerId) {
            throw new Error("Seller ID is missing from token");
        }
        const result = await seller_service_1.sellerService.updateMedicineInInventory(id, sellerId, req.body);
        res.status(200).json({
            success: true,
            message: "Medicine updated in inventory successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteMedicineFromInventory = async (req, res, next) => {
    try {
        const sellerId = req.user?.id;
        const { id } = req.params;
        const result = await seller_service_1.sellerService.deleteMedicineFromInventory(id, sellerId);
        res.status(200).json({
            success: true,
            message: "Medicine deleted from inventory successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.sellerController = {
    addMedicineToInventory,
    getSellerInventory,
    updateMedicineInInventory,
    deleteMedicineFromInventory,
};
//# sourceMappingURL=seller.controller.js.map