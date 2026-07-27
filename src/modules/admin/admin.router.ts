import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { adminController } from "./admin.controller";

const router = express.Router();

router.get("/users", auth(Role.ADMIN), adminController.getAllUsers);

router.patch("/users/:id", auth(Role.ADMIN), adminController.updateUserStatus);

router.get("/stats", auth(Role.ADMIN), adminController.getDashboardStats);

router.get("/orders", auth(Role.ADMIN), adminController.getAllOrders);


export const adminRouter = router;
