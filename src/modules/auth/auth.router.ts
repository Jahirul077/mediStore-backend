import express from "express";
import { authController } from "./auth.controller";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post("/register", authController.signUpUser);

router.post("/login", authController.signInUser);

router.post("/logout", authController.logoutUser);

router.get("/me", auth(), authController.getCurrentUser);

export const authRouter = router;
