"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const enums_1 = require("../../../generated/prisma/enums");
const payment_controller_1 = require("./payment.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(enums_1.Role.CUSTOMER), payment_controller_1.paymentController.createPaymentIntent);
router.post("/webhook", payment_controller_1.paymentController.handleWebhook);
router.get("/verify/:sessionId", (0, auth_1.auth)(enums_1.Role.CUSTOMER), payment_controller_1.paymentController.verifyPayment);
exports.paymentRouter = router;
//# sourceMappingURL=payment.router.js.map