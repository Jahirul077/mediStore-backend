import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/", auth(Role.CUSTOMER), orderController.createOrder);

router.get("/", auth(Role.CUSTOMER), orderController.getCustomerOrders);

router.get("/seller", auth(Role.SELLER), orderController.getSellerOrders);

router.get("/:id", auth(), orderController.getOrderById);

router.patch(
  "/seller/:id",
  auth(Role.SELLER, Role.ADMIN),
  orderController.updateOrderStatus,
);

export const orderRouter = router;
