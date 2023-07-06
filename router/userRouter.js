import { Router } from "express";
import { CreateUser } from "../controller/userController.js";
import path from "path";
const __dirname=path.resolve();

const userRouter = Router();
userRouter.route("/").get(function(req,res){res.sendFile(__dirname+'/user.html')}).post(CreateUser);
export default userRouter;