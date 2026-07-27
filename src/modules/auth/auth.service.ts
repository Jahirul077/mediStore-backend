import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import { Role } from "../../../generated/prisma/enums";
import jwt from "jsonwebtoken";

const signUpUser = async (payload: any) => {
  const { name, email, password, role, phone } = payload;

  // check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role || Role.CUSTOMER,
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

const signInUser = async (payload: any) => {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  if (user.status === "BANNED") {
    throw new Error("Your account has been banned. Contact admin.");
  }

  const jwtSecret = process.env.JWT_SECRET as string;

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    jwtSecret,
    {
      expiresIn: "7d",
    },
  );

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

const getCurrentUser = async (id: string) => {
  const user = await prisma.user.findUnique({
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

const forgotPassword = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User does not exist");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.verification.deleteMany({
    where: {
      identifier: email,
    },
  });

  const result = await prisma.verification.create({
    data: {
      identifier: email,
      value: otp,
      expiresAt,
    },
  });

  return {
    email: result.identifier,
    otp: result.value,
    expiresAt: result.expiresAt,
  };
};

const verifyOtp = async (email: string, otp: string) => {
  if (!email || !otp) {
    throw new Error("Email and OTP are required");
  }

  const verification = await prisma.verification.findFirst({
    where: {
      identifier: email,
      value: otp,
    },
  });

  if (!verification) {
    throw new Error("Invalid OTP");
  }

  if (new Date() > verification.expiresAt) {
    throw new Error("OTP has expired. Please request a new one.");
  }

  return true;
};

const resetPassword = async (payload: {
  email: string;
  otp: string;
  newPassword: string;
}) => {
  const { email, otp, newPassword } = payload;

  if (!email || !otp || !newPassword) {
    throw new Error("Email, OTP and new password are required");
  }

  await verifyOtp(email, otp);

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const updatedUser = await prisma.user.update({
    where: {
      email,
    },
    data: {
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  await prisma.verification.deleteMany({
    where: {
      identifier: email,
    },
  });

  return updatedUser;
};

export const authService = {
  signUpUser,
  signInUser,
  getCurrentUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
};
