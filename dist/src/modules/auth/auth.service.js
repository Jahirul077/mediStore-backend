"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../../lib/prisma");
const enums_1 = require("../../../generated/prisma/enums");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUpUser = async (payload) => {
    const { name, email, password, role, phone } = payload;
    // check if user already exists
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    // hash password
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    // create user
    return await prisma_1.prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role: role || enums_1.Role.CUSTOMER,
            phone,
        },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            role: true,
            phone: true,
            status: true,
            createdAt: true,
        },
    });
};
const signInUser = async (payload) => {
    const { email, password } = payload;
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    if (user.status === "BANNED") {
        throw new Error("Your account has been banned. Contact admin.");
    }
    const jwtSecret = process.env.JWT_SECRET;
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
        role: user.role,
    }, jwtSecret, {
        expiresIn: "7d",
    });
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            phone: user.phone,
            status: user.status,
            emailVerified: user.emailVerified,
        },
        token,
    };
};
const getCurrentUser = async (id) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            role: true,
            phone: true,
            status: true,
            createdAt: true,
        },
    });
    if (!user) {
        throw new Error("User does not exist anymore");
    }
    return user;
};
exports.authService = {
    signUpUser,
    signInUser,
    getCurrentUser,
};
//# sourceMappingURL=auth.service.js.map