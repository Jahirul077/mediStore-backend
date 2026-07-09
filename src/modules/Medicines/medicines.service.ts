import { prisma } from "../../lib/prisma";

const getAllMedicines = async (query: any) => {
  const { search, categoriesId, manufacturer, minPrice, maxPrice } = query;

  const whereConditions: any = {};

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

  return await prisma.medicines.findMany({
    where: whereConditions,
    include: {
      categories: true,
      inventories: {
        include: {
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
};

const getMedicineById = async (id: string) => {
  const medicine = await prisma.medicines.findUnique({
    where: {
      id,
    },
    include: {
      categories: true,
      inventories: {
        include: {
          seller: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
      reviews: {
        include: {
          customer: {
            select: {
              id: true,
              name: true,
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

export const medicinesService = {
  getAllMedicines,
  getMedicineById,
};
