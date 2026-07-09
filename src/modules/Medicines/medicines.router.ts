import express from "express";
import { medicinesController } from "./medicines.controller";

const router = express.Router();

router.get("/", medicinesController.getAllMedicines);

router.get("/:id", medicinesController.getMedicineById);


export const medicinesRouter = router;
