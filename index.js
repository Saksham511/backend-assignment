import express from "express";
import dotenv from "dotenv";
import connect from "./db.js";
import userRouter from "./router/userRouter.js";

const app= express();
dotenv.config();

connect();
app.use("/user",userRouter);
app.listen(process.env.PORT,console.log(`Server is listening at port: ${process.env.PORT}`));

console.log("Hello from backend");