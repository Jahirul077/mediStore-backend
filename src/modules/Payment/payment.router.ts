import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post(
  "/",
  auth(Role.CUSTOMER),
  paymentController.createPaymentIntent,
);



export const paymentRouter = router;
