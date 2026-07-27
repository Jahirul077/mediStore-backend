"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const signUpUser = async (req, res) => {
    try {
        const result = await auth_service_1.authService.signUpUser(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to register user",
        });
    }
};
const signInUser = async (req, res) => {
    try {
        const { user, token } = await auth_service_1.authService.signInUser(req.body);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: { token, user },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to login user",
        });
    }
};
const getCurrentUser = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            throw new Error("User ID is missing");
        }
        const result = await auth_service_1.authService.getCurrentUser(userId);
        res.status(200).json({
            success: true,
            message: "User profile retrieved successfully",
            data: { result },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to retrieve user profile",
        });
    }
};
const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to logout user",
        });
    }
};
exports.authController = {
    signUpUser,
    signInUser,
    getCurrentUser,
    logoutUser,
};
//# sourceMappingURL=auth.controller.js.map