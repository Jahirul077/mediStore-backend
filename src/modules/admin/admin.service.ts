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

export const adminService = {
  getAllUsers,
  updateUserStatus,
};
