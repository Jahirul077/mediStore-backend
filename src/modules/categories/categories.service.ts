import { prisma } from "../../lib/prisma";

const createCategory = async (payload: any) => {
  const { title, description, status } = payload;

  if (!title) {
    throw new Error("Missing required fields");
  }

  const existingCategory = await prisma.categories.findFirst({
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

  return await prisma.categories.create({
    data: {
      title,
      description,
      status: status || "Active",
    },
  });
};

const getAllCategories = async () => {
  return await prisma.categories.findMany();
};

const updateCategory = async (id: string, payload: any) => {
  const { title, description, status } = payload;

  if (!title) {
    throw new Error("Missing required fields");
  }

  const existingCategory = await prisma.categories.findFirst({
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

  return await prisma.categories.update({
    where: { id },
    data: {
      title,
      description,
      status: status ? status.toUpperCase() : undefined,
    },
  });
};

const deleteCategory = async (id: string) => {
  return await prisma.categories.delete({
    where: {
      id,
    },
  });
};

export const categoriesService = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
