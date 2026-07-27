"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerRouter = void 0;
const express_1 = __importDefault(require("express"));
const seller_controller_1 = require("./seller.controller");
const auth_1 = require("../../middlewares/auth");
const enums_1 = require("../../../generated/prisma/enums");
const router = express_1.default.Router();
router.post("/medicines", (0, auth_1.auth)(enums_1.Role.SELLER, enums_1.Role.ADMIN), seller_controller_1.sellerController.addMedicineToInventory);
router.get("/medicines", (0, auth_1.auth)(enums_1.Role.SELLER, enums_1.Role.ADMIN), seller_controller_1.sellerController.getSellerInventory);
router.patch("/medicines/:id", (0, auth_1.auth)(enums_1.Role.SELLER, enums_1.Role.ADMIN), seller_controller_1.sellerController.updateMedicineInInventory);
router.delete("/medicines/:id", (0, auth_1.auth)(enums_1.Role.SELLER, enums_1.Role.ADMIN), seller_controller_1.sellerController.deleteMedicineFromInventory);
exports.sellerRouter = router;
//# sourceMappingURL=seller.router.js.map