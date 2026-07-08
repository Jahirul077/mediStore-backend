import { Request, Response, NextFunction } from "express";
import { Prisma } from "../../generated/prisma/client";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";

  // 1. Handle Prisma Known Request Errors (P-codes)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    statusCode = 400;
    switch (err.code) {
      case "P2002":
        message = `Duplicate entry: A record with this '${err.meta?.target || "field"}' already exists.`;
        break;
      case "P2003":
        message = "Foreign key constraint failed. The referenced record does not exist.";
        break;
      case "P2025":
        statusCode = 404;
        message = "The requested record was not found or has already been deleted.";
        break;
      default:
        message = `Database Error: ${err.message}`;
    }
  }

  // 2. Handle Prisma Type or Validation Errors (e.g. passing string instead of number)
  else if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    message = "Database validation failed. Please check the data types of your inputs.";
  }

  // 3. Handle Express JSON Parsing Errors (e.g. trailing commas or syntax errors in request body)
  else if (err instanceof SyntaxError && "body" in err) {
    statusCode = 400;
    message = `Malformed JSON: ${err.message}`;
  }

  // 4. Handle JWT Authentication Errors
  else if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid auth token. Please login again.";
  } else if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Auth token has expired. Please login again.";
  }

  // 5. Send Error Response
  res.status(statusCode).json({
    success: false,
    message,
  });
};
