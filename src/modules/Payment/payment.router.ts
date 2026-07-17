import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post("/", auth(Role.CUSTOMER), paymentController.createPaymentIntent);

router.post("/webhook", paymentController.handleWebhook);

router.get(
  "/verify/:sessionId",
  auth(Role.CUSTOMER),
  paymentController.verifyPayment,
);

export const paymentRouter = router;
