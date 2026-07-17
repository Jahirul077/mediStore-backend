import express from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { categoriesController } from "./categories.controller";

const router = express.Router();

router.post("/", auth(Role.ADMIN), categoriesController.createCategory);

router.get("/", categoriesController.getAllCategories);

router.patch("/:id", auth(Role.ADMIN), categoriesController.updateCategory);

router.delete("/:id", auth(Role.ADMIN), categoriesController.deleteCategory);

export const categoriesRouter = router;
