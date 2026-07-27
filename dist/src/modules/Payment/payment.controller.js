"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentController = void 0;
const payment_service_1 = require("./payment.service");
const createPaymentIntent = async (req, res, next) => {
    try {
        const { orderId, successUrl, cancelUrl } = req.body;
        if (!orderId) {
            throw new Error("Order Id is required");
        }
        if (!successUrl || !cancelUrl) {
            throw new Error("successUrl and cancelUrl are required");
        }
        const result = await payment_service_1.paymentService.createPaymentIntent(orderId, successUrl, cancelUrl);
        res.status(200).json({
            success: true,
            message: "Payment intent created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const handleWebhook = async (req, res, next) => {
    try {
        const signature = req.headers["stripe-signature"];
        const rawBody = req.rawBody;
        if (!rawBody || !signature) {
            res.status(400).send("Missing raw body or signature");
            return;
        }
        await payment_service_1.paymentService.handleWebhook(rawBody, signature);
        res.status(200).json({ received: true });
    }
    catch (error) {
        next(error);
    }
};
const verifyPayment = async (req, res, next) => {
    try {
        const { sessionId } = req.params;
        if (!sessionId) {
            throw new Error("Session Id is required");
        }
        const result = await payment_service_1.paymentService.verifyPayment(sessionId);
        res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.paymentController = {
    createPaymentIntent,
    handleWebhook,
    verifyPayment,
};
//# sourceMappingURL=payment.controller.js.map