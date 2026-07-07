import { prisma } from "../../lib/prisma";

const addMedicineToInventory = async (sellerId: string, payload: any) => {
  const { medicinesId, price, stock } = payload;

  return await prisma.sellerInventory.create({
    data: {
      price: Number(price),
      stock: Number(stock),
      seller: { connect: { id: sellerId } },
      medicines: { connect: { id: medicinesId } },
    },
  });
};

export const sellerService = { addMedicineToInventory };