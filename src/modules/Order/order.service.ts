import { prisma } from "../../lib/prisma";

const createOrder = async (
  customerId: string,
  payload: {
    shipping_Address: string;
    items: {
      SellerInventoryId: string;
      quantity: number;
    }[];
  },
) => {
  const { shipping_Address, items } = payload;

  if (!shipping_Address || !items || items.length === 0) {
    throw new Error("Shipping address and order items are required");
  }

  return await prisma.$transaction(async (tx) => {
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
        throw new Error(
          `Insufficient stock for medicine: ${inventory.medicines.title}`,
        );
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

const getCustomerOrders = async (customerId: string) => {
  return await prisma.order.findMany({
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

const getOrderById = async (
  id: string,
  user: {
    id: string;
    role: string;
  },
) => {
  const order = await prisma.order.findUnique({
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

const getSellerOrders = async (sellerId: string) => {
  return await prisma.order.findMany({
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

const updateOrderStatus = async (
  orderId: string,
  user: { id: string; role: string },
  status: any,
) => {
  const order = await prisma.order.findUnique({
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

  return await prisma.order.update({
    where: { id: orderId },
    data: {status},
  });
};

export const orderService = {
  createOrder,
  getCustomerOrders,
  getOrderById,
  getSellerOrders,
  updateOrderStatus,
};
