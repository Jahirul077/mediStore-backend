import express from "express";
import { sellerController } from "./seller.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.post(
  "/medicines",
  auth(Role.SELLER, Role.ADMIN),
  sellerController.addMedicineToInventory,
);

router.get(
  "/medicines",
  auth(Role.SELLER, Role.ADMIN),
  sellerController.getSellerInventory,
);

router.patch(
  "/medicines/:id",
  auth(Role.SELLER, Role.ADMIN),
  sellerController.updateMedicineInInventory,
);

router.delete(
  "/medicines/:id",
  auth(Role.SELLER, Role.ADMIN),
  sellerController.deleteMedicineFromInventory,
);

router.get(
  "/stats",
  auth(Role.SELLER, Role.ADMIN),
  sellerController.getSellerDashboardStats,
);

export const sellerRouter = router;
