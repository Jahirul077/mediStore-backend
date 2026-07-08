import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.router";
import { sellerRouter } from "./modules/seller/seller.router";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRouter);

app.use("/api/seller", sellerRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

export default app;
