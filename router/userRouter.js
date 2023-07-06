import { Router } from "express";
import { CreateUser, LogIn } from "../controller/userController.js";
import path from "path";
const __dirname=path.resolve();

const userRouter = Router();
userRouter.route("/register").get(function(req,res){res.sendFile(__dirname+'/register.html')}).post(CreateUser);
userRouter.route("/login").get(function(req,res){res.sendFile(__dirname+'/login.html')}).post(LogIn);
export default userRouter;