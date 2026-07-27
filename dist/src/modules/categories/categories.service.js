"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesService = void 0;
const paginationHelper_1 = require("../../helpers/paginationHelper");
const prisma_1 = require("../../lib/prisma");
const createCategory = async (payload) => {
    const { title, description, status } = payload;
    if (!title) {
        throw new Error("Missing required fields");
    }
    const existingCategory = await prisma_1.prisma.categories.findFirst({
        where: {
            title: {
                equals: title,
                mode: "insensitive",
            },
        },
    });
    if (existingCategory) {
        throw new Error("Category already exists");
    }
    return await prisma_1.prisma.categories.create({
        data: {
            title,
            description,
            status: status || "Active",
        },
    });
};
const getAllCategories = async (options) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const result = await prisma_1.prisma.categories.findMany({
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = await prisma_1.prisma.categories.count();
    return {
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
        data: result,
    };
};
const updateCategory = async (id, payload) => {
    const { title, description, status } = payload;
    if (!title) {
        throw new Error("Missing required fields");
    }
    const existingCategory = await prisma_1.prisma.categories.findFirst({
        where: {
            title: {
                equals: title,
                mode: "insensitive",
            },
            NOT: {
                id: id,
            },
        },
    });
    if (existingCategory) {
        throw new Error("Category already exists");
    }
    return await prisma_1.prisma.categories.update({
        where: { id },
        data: {
            title,
            description,
            status: status ? status.toUpperCase() : undefined,
        },
    });
};
const deleteCategory = async (id) => {
    return await prisma_1.prisma.categories.delete({
        where: {
            id,
        },
    });
};
exports.categoriesService = {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=categories.service.js.map