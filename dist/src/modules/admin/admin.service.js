"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const getAllUsers = async () => {
    return await prisma_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};
const updateUserStatus = async (userId, status) => {
    const targetUser = await prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!targetUser) {
        throw new Error("User not found");
    }
    if (targetUser.role === enums_1.Role.ADMIN) {
        throw new Error("You cannot change the status of an Admin user");
    }
    return await prisma_1.prisma.user.update({
        where: { id: userId },
        data: {
            status,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            updatedAt: true,
        },
    });
};
const getAdminStats = async () => {
    // Aggregate total revenue from completed payments
    const totalRevenueResult = await prisma_1.prisma.order.aggregate({
        where: {
            paymentStatus: "COMPLETED",
        },
        _sum: {
            totalAmount: true,
        },
    });
    const totalRevenue = totalRevenueResult._sum.totalAmount
        ? Number(totalRevenueResult._sum.totalAmount)
        : 0;
    // Total counts
    const totalUsers = await prisma_1.prisma.user.count();
    const totalMedicines = await prisma_1.prisma.medicines.count();
    const totalOrders = await prisma_1.prisma.order.count();
    // Role Breakdown
    const customerCount = await prisma_1.prisma.user.count({
        where: { role: enums_1.Role.CUSTOMER },
    });
    const sellerCount = await prisma_1.prisma.user.count({
        where: { role: enums_1.Role.SELLER },
    });
    const adminCount = await prisma_1.prisma.user.count({
        where: { role: enums_1.Role.ADMIN },
    });
    // Order Status Breakdown
    const orderStatusCounts = await prisma_1.prisma.order.groupBy({
        by: ["status"],
        _count: {
            id: true,
        },
    });
    const orderStatusBreakdown = orderStatusCounts.reduce((acc, item) => {
        acc[item.status] = item._count.id;
        return acc;
    }, {});
    // Payment Status Breakdown
    const paymentStatusCounts = await prisma_1.prisma.order.groupBy({
        by: ["paymentStatus"],
        _count: {
            id: true,
        },
    });
    const paymentStatusBreakdown = paymentStatusCounts.reduce((acc, item) => {
        acc[item.paymentStatus] = item._count.id;
        return acc;
    }, {});
    // Recent 5 Orders
    const recentOrders = await prisma_1.prisma.order.findMany({
        take: 5,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            totalAmount: true,
            status: true,
            paymentStatus: true,
            createdAt: true,
            customer: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });
    return {
        totalRevenue,
        totalUsers,
        totalMedicines,
        totalOrders,
        userCounts: {
            customer: customerCount,
            seller: sellerCount,
            admin: adminCount,
        },
        orderStatusBreakdown,
        paymentStatusBreakdown,
        recentOrders,
    };
};
const getAdminOrders = async (query) => {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;
    const whereCondition = {};
    if (query.status) {
        whereCondition.status = query.status;
    }
    if (query.paymentStatus) {
        whereCondition.paymentStatus = query.paymentStatus;
    }
    const orders = await prisma_1.prisma.order.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            customerId: true,
            totalAmount: true,
            shipping_Address: true,
            status: true,
            paymentStatus: true,
            paymentIntentId: true,
            transactionId: true,
            createdAt: true,
            updatedAt: true,
            customer: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                },
            },
            orderItems: {
                select: {
                    id: true,
                    quantity: true,
                    price: true,
                    sellerInventory: {
                        select: {
                            id: true,
                            price: true,
                            seller: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true,
                                },
                            },
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
    const total = await prisma_1.prisma.order.count({ where: whereCondition });
    return {
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
        data: orders,
    };
};
exports.adminService = {
    getAllUsers,
    updateUserStatus,
    getAdminStats,
    getAdminOrders,
};
//# sourceMappingURL=admin.service.js.map