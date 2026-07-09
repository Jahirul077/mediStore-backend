import express from "express";
import { medicinesController } from "./medicines.controller";

const router = express.Router();

router.get("/medicines", medicinesController.getAllMedicines);

router.get("/medicines/:id", medicinesController.getMedicineById);

export const medicinesRouter = router;
