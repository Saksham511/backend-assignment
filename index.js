import express from "express";
import dotenv from "dotenv";

const app= express();
dotenv.config();

app.listen(process.env.PORT,console.log(`Server is listening at port: ${process.env.PORT}`));

console.log("Hello from backend");