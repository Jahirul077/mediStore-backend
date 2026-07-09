import { prisma } from "../../lib/prisma";

const createCategory = async (payload: any) => {
  const { title } = payload;

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
    },
  });
};

const getAllCategories = async () => {
  return await prisma.categories.findMany();
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
  deleteCategory,
};
