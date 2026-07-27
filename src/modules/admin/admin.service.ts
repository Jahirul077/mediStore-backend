import { Role, UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const getAllUsers = async () => {
  return await prisma.user.findMany({
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

const updateUserStatus = async (userId: string, status: UserStatus) => {
  const targetUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!targetUser) {
    throw new Error("User not found");
  }

  if (targetUser.role === Role.ADMIN) {
    throw new Error("You cannot change the status of an Admin user");
  }

  return await prisma.user.update({
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

const getDashboardStats = async () => {
  const totalRevenueResult = await prisma.order.aggregate({
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

  const totalOrders = await prisma.order.count();

  const totalSellers = await prisma.user.count({
    where: {
      role: Role.SELLER,
    },
  });

  const totalCustomers = await prisma.user.count({
    where: {
      role: Role.CUSTOMER,
    },
  });

  return {
    totalRevenue,
    totalOrders,
    totalSellers,
    totalCustomers,
  };
};

const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      orderItems: {
        include: {
          sellerInventory: {
            include: {
              medicines: true,
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
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
};

export const adminService = {
  getAllUsers,
  updateUserStatus,
  getDashboardStats,
  getAllOrders
};
