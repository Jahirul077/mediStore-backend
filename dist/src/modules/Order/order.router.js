"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const enums_1 = require("../../../generated/prisma/enums");
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(enums_1.Role.CUSTOMER), order_controller_1.orderController.createOrder);
router.get("/", (0, auth_1.auth)(enums_1.Role.CUSTOMER), order_controller_1.orderController.getCustomerOrders);
router.get("/seller", (0, auth_1.auth)(enums_1.Role.SELLER), order_controller_1.orderController.getSellerOrders);
router.get("/:id", (0, auth_1.auth)(), order_controller_1.orderController.getOrderById);
router.patch("/seller/:id", (0, auth_1.auth)(enums_1.Role.SELLER, enums_1.Role.ADMIN), order_controller_1.orderController.updateOrderStatus);
exports.orderRouter = router;
//# sourceMappingURL=order.router.js.map