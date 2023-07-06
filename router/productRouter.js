import { Router } from "express";
import path from "path";
import { CreateProduct, ShowProduct } from "../controller/productController.js";
const __dirname=path.resolve();

const productRouter = Router();
productRouter.route("/addproduct").get(function(req,res){res.sendFile(__dirname+'/addproduct.html')}).post(CreateProduct);
productRouter.route("/viewproduct").get(ShowProduct);
export default productRouter;