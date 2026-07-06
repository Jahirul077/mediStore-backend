import { Request, Response } from "express";
import { authService } from "./auth.service";

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

export const authController = {
  signUpUser,
  signInUser,
};
