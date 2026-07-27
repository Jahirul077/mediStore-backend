"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicinesService = void 0;
const prisma_1 = require("../../lib/prisma");
const getAllMedicines = async (query) => {
    const { search, categoriesId, manufacturer, minPrice, maxPrice } = query;
    const whereConditions = {};
    if (search) {
        whereConditions.OR = [
            { title: { contains: search, mode: "insensitive" } },
            { genericName: { contains: search, mode: "insensitive" } },
        ];
    }
    if (categoriesId) {
        whereConditions.categoriesId = categoriesId;
    }
    if (manufacturer) {
        whereConditions.manufacturer = {
            equals: manufacturer,
            mode: "insensitive",
        };
    }
    if (minPrice !== undefined || maxPrice !== undefined) {
        whereConditions.inventories = {
            some: {
                price: {
                    gte: minPrice !== undefined ? Number(minPrice) : undefined,
                    lte: maxPrice !== undefined ? Number(maxPrice) : undefined,
                },
            },
        };
    }
    return await prisma_1.prisma.medicines.findMany({
        where: whereConditions,
        select: {
            id: true,
            title: true,
            genericName: true,
            strength: true,
            image: true,
            categories: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });
};
const getMedicineById = async (id) => {
    const medicine = await prisma_1.prisma.medicines.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            title: true,
            genericName: true,
            strength: true,
            description: true,
            image: true,
            manufacturer: true,
            categories: {
                select: {
                    id: true,
                    title: true,
                },
            },
            inventories: {
                select: {
                    id: true,
                    price: true,
                    stock: true,
                    seller: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
    if (!medicine) {
        throw new Error("Medicine not found");
    }
    return medicine;
};
exports.medicinesService = {
    getAllMedicines,
    getMedicineById,
};
//# sourceMappingURL=medicines.service.js.map