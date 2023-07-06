import express from "express";
import dotenv from "dotenv";
import connect from "./db.js";

const app= express();
dotenv.config();

connect();
app.listen(process.env.PORT,console.log(`Server is listening at port: ${process.env.PORT}`));

console.log("Hello from backend");