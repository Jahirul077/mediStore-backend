"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
router.post("/register", auth_controller_1.authController.signUpUser);
router.post("/login", auth_controller_1.authController.signInUser);
router.post("/logout", auth_controller_1.authController.logoutUser);
router.get("/me", (0, auth_1.auth)(), auth_controller_1.authController.getCurrentUser);
exports.authRouter = router;
//# sourceMappingURL=auth.router.js.map