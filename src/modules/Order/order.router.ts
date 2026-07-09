import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/", auth.apply(Role.CUSTOMER), orderController.createOrder);

router.get("/", auth.apply(Role.CUSTOMER), orderController.getCustomerOrders);

router.get("/:id", auth(), orderController.getOrderById);

export const orderRouter = router;
