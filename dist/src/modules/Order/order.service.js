"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const prisma_1 = require("../../lib/prisma");
const createOrder = async (customerId, payload) => {
    const { shipping_Address, items } = payload;
    if (!shipping_Address || !items || items.length === 0) {
        throw new Error("Shipping address and order items are required");
    }
    return await prisma_1.prisma.$transaction(async (tx) => {
        let totalAmount = 0;
        const orderItemsData = [];
        for (const item of items) {
            const inventory = await tx.sellerInventory.findUnique({
                where: {
                    id: item.SellerInventoryId,
                },
                include: {
                    medicines: true,
                },
            });
            if (!inventory) {
                throw new Error("Inventory not found");
            }
            if (inventory.stock < item.quantity) {
                throw new Error(`Insufficient stock for medicine: ${inventory.medicines.title}`);
            }
            const itemPrice = Number(inventory.price);
            const itemTotal = itemPrice * item.quantity;
            totalAmount += itemTotal;
            orderItemsData.push({
                sellerInventoryId: item.SellerInventoryId,
                quantity: item.quantity,
                price: itemPrice,
            });
            await tx.sellerInventory.update({
                where: {
                    id: item.SellerInventoryId,
                },
                data: {
                    stock: {
                        decrement: item.quantity,
                    },
                },
            });
        }
        const order = await tx.order.create({
            data: {
                customerId,
                totalAmount,
                shipping_Address,
                orderItems: {
                    create: orderItemsData,
                },
            },
            select: {
                id: true,
                customerId: true,
                totalAmount: true,
                shipping_Address: true,
                status: true,
                createdAt: true,
                orderItems: {
                    select: {
                        id: true,
                        quantity: true,
                        price: true,
                        sellerInventory: {
                            select: {
                                id: true,
                                price: true,
                                stock: true,
                                medicines: {
                                    select: {
                                        id: true,
                                        title: true,
                                        genericName: true,
                                        strength: true,
                                        image: true,
                                        manufacturer: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        return order;
    });
};
const getCustomerOrders = async (customerId) => {
    return await prisma_1.prisma.order.findMany({
        where: {
            customerId,
        },
        select: {
            id: true,
            customerId: true,
            totalAmount: true,
            shipping_Address: true,
            status: true,
            createdAt: true,
            orderItems: {
                select: {
                    id: true,
                    quantity: true,
                    price: true,
                    sellerInventory: {
                        select: {
                            id: true,
                            price: true,
                            stock: true,
                            medicines: {
                                select: {
                                    id: true,
                                    title: true,
                                    genericName: true,
                                    strength: true,
                                    image: true,
                                    manufacturer: true,
                                },
                            },
                        },
                    },
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
const getOrderById = async (id, user) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            customerId: true,
            totalAmount: true,
            shipping_Address: true,
            status: true,
            createdAt: true,
            orderItems: {
                select: {
                    id: true,
                    quantity: true,
                    price: true,
                    sellerInventory: {
                        select: {
                            id: true,
                            price: true,
                            stock: true,
                            medicines: {
                                select: {
                                    id: true,
                                    title: true,
                                    genericName: true,
                                    strength: true,
                                    image: true,
                                    manufacturer: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    if (!order) {
        throw new Error("Order not found");
    }
    if (user.role === "CUSTOMER" && order.customerId !== user.id) {
        throw new Error("Unauthorized");
    }
    return order;
};
const getSellerOrders = async (sellerId) => {
    return await prisma_1.prisma.order.findMany({
        where: {
            orderItems: {
                some: {
                    sellerInventory: {
                        sellerId: sellerId,
                    },
                },
            },
        },
        select: {
            id: true,
            customerId: true,
            totalAmount: true,
            shipping_Address: true,
            status: true,
            createdAt: true,
            customer: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                },
            },
            orderItems: {
                where: {
                    sellerInventory: {
                        sellerId: sellerId,
                    },
                },
                select: {
                    id: true,
                    quantity: true,
                    price: true,
                    sellerInventory: {
                        select: {
                            id: true,
                            price: true,
                            stock: true,
                            medicines: {
                                select: {
                                    id: true,
                                    title: true,
                                    genericName: true,
                                    strength: true,
                                    image: true,
                                    manufacturer: true,
                                },
                            },
                        },
                    },
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
const updateOrderStatus = async (orderId, user, status) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id: orderId },
        include: {
            orderItems: {
                include: {
                    sellerInventory: true,
                },
            },
        },
    });
    if (!order) {
        throw new Error("Unauthorized to update this order's status");
    }
    if (user.role === "SELLER") {
        const hasSellerProduct = order.orderItems.some((item) => {
            return item.sellerInventory.sellerId === user.id;
        });
        if (!hasSellerProduct) {
            throw new Error("Unauthorized to update this order's status");
        }
    }
    return await prisma_1.prisma.order.update({
        where: { id: orderId },
        data: { status },
    });
};
exports.orderService = {
    createOrder,
    getCustomerOrders,
    getOrderById,
    getSellerOrders,
    updateOrderStatus,
};
//# sourceMappingURL=order.service.js.map