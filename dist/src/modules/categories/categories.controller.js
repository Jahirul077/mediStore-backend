"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesController = void 0;
const categories_service_1 = require("./categories.service");
const createCategory = async (req, res, next) => {
    try {
        const result = await categories_service_1.categoriesService.createCategory(req.body);
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getAllCategories = async (req, res, next) => {
    try {
        const options = {
            page: req.query.page ? Number(req.query.page) : 1,
            limit: req.query.limit ? Number(req.query.limit) : 10,
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        };
        const result = await categories_service_1.categoriesService.getAllCategories(options);
        res.status(200).json({
            success: true,
            message: "Categories retrieved successfully",
            data: result.data,
            meta: result.meta,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await categories_service_1.categoriesService.updateCategory(id, req.body);
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await categories_service_1.categoriesService.deleteCategory(id);
        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.categoriesController = {
    createCategory,
    getAllCategories,
    deleteCategory,
    updateCategory,
};
//# sourceMappingURL=categories.controller.js.map