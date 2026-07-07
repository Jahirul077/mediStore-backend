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

export const sellerRouter = router;