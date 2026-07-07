import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.router";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
