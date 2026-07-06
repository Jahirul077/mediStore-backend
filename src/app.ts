import express, { Application } from "express";
import { authRouter } from "./modules/auth/auth.router";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
