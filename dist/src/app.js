"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_router_1 = require("./modules/auth/auth.router");
const seller_router_1 = require("./modules/seller/seller.router");
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const medicines_router_1 = require("./modules/Medicines/medicines.router");
const categories_router_1 = require("./modules/categories/categories.router");
const order_router_1 = require("./modules/Order/order.router");
const reviews_router_1 = require("./modules/review/reviews.router");
const admin_router_1 = require("./modules/admin/admin.router");
const payment_router_1 = require("./modules/Payment/payment.router");
const app = (0, express_1.default)();
// app.use(express.json());
app.use(express_1.default.json({
    verify: (req, res, buf) => {
        if (req.originalUrl.startsWith("/api/payment/webhook")) {
            req.rawBody = buf;
        }
    },
}));
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", auth_router_1.authRouter);
app.use("/api/seller", seller_router_1.sellerRouter);
app.use("/api/medicines", medicines_router_1.medicinesRouter);
app.use("/api/categories", categories_router_1.categoriesRouter);
app.use("/api/orders", order_router_1.orderRouter);
app.use("/api/review", reviews_router_1.reviewsRouter);
app.use("/api/admin", admin_router_1.adminRouter);
app.use("/api/payment", payment_router_1.paymentRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map