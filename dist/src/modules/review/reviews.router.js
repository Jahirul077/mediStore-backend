"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const enums_1 = require("../../../generated/prisma/enums");
const reviews_controller_1 = require("./reviews.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(enums_1.Role.CUSTOMER), reviews_controller_1.reviewsController.createReview);
router.patch("/:id", (0, auth_1.auth)(enums_1.Role.CUSTOMER), reviews_controller_1.reviewsController.updateReview);
router.delete("/:id", (0, auth_1.auth)(enums_1.Role.CUSTOMER, enums_1.Role.ADMIN), reviews_controller_1.reviewsController.deleteReview);
router.get("/:id", reviews_controller_1.reviewsController.getReviewsByMedicineId);
exports.reviewsRouter = router;
//# sourceMappingURL=reviews.router.js.map