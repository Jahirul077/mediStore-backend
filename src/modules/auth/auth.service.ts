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

export const authService = {
  signUpUser,
  signInUser,
  getCurrentUser,
};
