import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";
import { AuthRequest } from "../../middlewares/auth";

const signUpUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.signUpUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to register user",
    });
  }
};

const signInUser = async (req: Request, res: Response) => {
  try {
    const { user, token } = await authService.signInUser(req.body);

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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to login user",
    });
  }
};

const getCurrentUser = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new Error("User ID is missing");
    }

    const result = await authService.getCurrentUser(userId);

    res.status(200).json({
      success: true,
      message: "User profile retrieved successfully",
      data: { result },
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to retrieve user profile",
    });
  }
};

const logoutUser = async (req: Request, res: Response) => {
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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to logout user",
    });
  }
};

const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;

    const result = await authService.forgotPassword(email);

    res.status(200).json({
      success: true,
      message: "6-Digit OTP sent successfully to your email. Valid for 5 minutes.",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp } = req.body;

    const result = await authService.verifyOtp(email, otp);
    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await authService.resetPassword(req.body);
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  signUpUser,
  signInUser,
  getCurrentUser,
  logoutUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
};
