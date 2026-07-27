"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const enums_1 = require("../../../generated/prisma/enums");
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.get("/users", (0, auth_1.auth)(enums_1.Role.ADMIN), admin_controller_1.adminController.getAllUsers);
router.get("/stats", (0, auth_1.auth)(enums_1.Role.ADMIN), admin_controller_1.adminController.getAdminStats);
router.get("/orders", (0, auth_1.auth)(enums_1.Role.ADMIN), admin_controller_1.adminController.getAdminOrders);
router.patch("/users/:id", (0, auth_1.auth)(enums_1.Role.ADMIN), admin_controller_1.adminController.updateUserStatus);
exports.adminRouter = router;
//# sourceMappingURL=admin.router.js.map