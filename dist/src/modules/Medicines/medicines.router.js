"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicinesRouter = void 0;
const express_1 = __importDefault(require("express"));
const medicines_controller_1 = require("./medicines.controller");
const router = express_1.default.Router();
router.get("/", medicines_controller_1.medicinesController.getAllMedicines);
router.get("/:id", medicines_controller_1.medicinesController.getMedicineById);
exports.medicinesRouter = router;
//# sourceMappingURL=medicines.router.js.map