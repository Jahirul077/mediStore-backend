import express from "express";
import { sellerController } from "./seller.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.post(
  "/medicines",
  auth(Role.SELLER),
  sellerController.addMedicineToInventory,
);

router.get(
  "/medicines",
  auth(Role.SELLER),
  sellerController.getSellerInventory,
);

router.patch(
  "/medicines/:id",
  auth(Role.SELLER),
  sellerController.updateMedicineInInventory,
);

router.delete(
  "/medicines/:id",
  auth(Role.SELLER),
  sellerController.deleteMedicineFromInventory,
);

export const sellerRouter = router;
