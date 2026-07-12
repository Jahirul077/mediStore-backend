import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { reviewsController } from "./reviews.controller";

const router = express.Router();

router.post("/", auth(Role.CUSTOMER), reviewsController.createReview);

router.patch("/:id", auth(Role.CUSTOMER), reviewsController.updateReview);

router.delete(
  "/:id",
  auth(Role.CUSTOMER, Role.ADMIN),
  reviewsController.deleteReview,
);

export const reviewsRouter = router;
