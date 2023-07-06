import { Router } from "express";
import { userFunction } from "../controller/userController.js";

const userRouter = Router();
userRouter.route("/").get(userFunction);
export default userRouter;