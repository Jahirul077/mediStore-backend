"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const enums_1 = require("../../../generated/prisma/enums");
const categories_controller_1 = require("./categories.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(enums_1.Role.ADMIN), categories_controller_1.categoriesController.createCategory);
router.get("/", categories_controller_1.categoriesController.getAllCategories);
router.patch("/:id", (0, auth_1.auth)(enums_1.Role.ADMIN), categories_controller_1.categoriesController.updateCategory);
router.delete("/:id", (0, auth_1.auth)(enums_1.Role.ADMIN), categories_controller_1.categoriesController.deleteCategory);
exports.categoriesRouter = router;
//# sourceMappingURL=categories.router.js.map