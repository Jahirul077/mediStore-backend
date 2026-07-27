"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerService = void 0;
const prisma_1 = require("../../lib/prisma");
const addMedicineToInventory = async (sellerId, payload) => {
    const { title, genericName, strength, description, image, manufacturer, categoriesId, price, stock, } = payload;
    if (!title ||
        !description ||
        !image ||
        !manufacturer ||
        !categoriesId ||
        price === undefined ||
        stock === undefined) {
        throw new Error("Missing required fields");
    }
    let medicine = await prisma_1.prisma.medicines.findFirst({
        where: {
            title: {
                equals: title,
                mode: "insensitive",
            },
            manufacturer: {
                equals: manufacturer,
                mode: "insensitive",
            },
        },
    });
    if (!medicine) {
        medicine = await prisma_1.prisma.medicines.create({
            data: {
                title,
                genericName,
                strength,
                description,
                image,
                manufacturer,
                categories: {
                    connect: {
                        id: categoriesId,
                    },
                },
            },
        });
    }
    return await prisma_1.prisma.sellerInventory.create({
        data: {
            price: Number(price),
            stock: Number(stock),
            seller: {
                connect: {
                    id: sellerId,
                },
            },
            medicines: {
                connect: {
                    id: medicine.id,
                },
            },
        },
        include: {
            medicines: true,
        },
    });
};
const getSellerInventory = async (sellerId) => {
    return await prisma_1.prisma.sellerInventory.findMany({
        where: {
            sellerId: sellerId,
        },
        include: {
            medicines: {
                include: {
                    categories: true,
                },
            },
        },
    });
};
const updateMedicineInInventory = async (inventoryId, sellerId, payload) => {
    const { price, stock, title, genericName, strength, description, image, manufacturer, categoriesId, } = payload;
    return await prisma_1.prisma.sellerInventory.update({
        where: {
            id: inventoryId,
            sellerId: sellerId,
        },
        data: {
            price: price !== undefined ? Number(price) : undefined,
            stock: stock !== undefined ? Number(stock) : undefined,
            medicines: {
                update: {
                    title: title !== undefined ? title : undefined,
                    genericName: genericName !== undefined ? genericName : undefined,
                    strength: strength !== undefined ? strength : undefined,
                    description: description !== undefined ? description : undefined,
                    image: image !== undefined ? image : undefined,
                    manufacturer: manufacturer !== undefined ? manufacturer : undefined,
                    categories: categoriesId !== undefined
                        ? { connect: { id: categoriesId } }
                        : undefined,
                },
            },
        },
        include: {
            medicines: true,
        },
    });
};
const deleteMedicineFromInventory = async (inventoryId, sellerId) => {
    return await prisma_1.prisma.sellerInventory.delete({
        where: {
            id: inventoryId,
            sellerId: sellerId,
        },
    });
};
exports.sellerService = {
    addMedicineToInventory,
    getSellerInventory,
    updateMedicineInInventory,
    deleteMedicineFromInventory,
};
//# sourceMappingURL=seller.service.js.map