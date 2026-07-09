import { prisma } from "../../lib/prisma";

const addMedicineToInventory = async (sellerId: string, payload: any) => {
  const {
    title,
    genericName,
    strength,
    description,
    image,
    manufacturer,
    categoriesId,
    price,
    stock,
  } = payload;

  if (
    !title ||
    !description ||
    !image ||
    !manufacturer ||
    !categoriesId ||
    price === undefined ||
    stock === undefined
  ) {
    throw new Error("Missing required fields");
  }

  let medicine = await prisma.medicines.findFirst({
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
    medicine = await prisma.medicines.create({
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

  return await prisma.sellerInventory.create({
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

const getSellerInventory = async (sellerId: string) => {
  return await prisma.sellerInventory.findMany({
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

const updateMedicineInInventory = async (
  inventoryId: string,
  sellerId: string,
  payload: any,
) => {
  const {
    price,
    stock,
    title,
    genericName,
    strength,
    description,
    image,
    manufacturer,
    categoriesId,
  } = payload;

  return await prisma.sellerInventory.update({
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
          categories:
            categoriesId !== undefined
              ? { connect: { id: categoriesId } }
              : undefined,
        },
      },
    } as any,
    include: {
      medicines: true,
    },
  });
};

const deleteMedicineFromInventory = async (
  inventoryId: string,
  sellerId: string,
) => {
  return await prisma.sellerInventory.delete({
    where: {
      id: inventoryId,
      sellerId: sellerId,
    },
  });
};
 

export const sellerService = {
  addMedicineToInventory,
  getSellerInventory,
  updateMedicineInInventory,
  deleteMedicineFromInventory,
};
