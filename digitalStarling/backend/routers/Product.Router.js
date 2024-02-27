const express=require("express");
const ProductRouter=express.Router();
const {AddProduct,GetAllProduct,GetProductById,SearchProducts}=require("../controllers/Product.controller")
const {Authentication}=require("../Middlewares/Authentication");
ProductRouter.use(Authentication);
ProductRouter.post('/Add',AddProduct);
ProductRouter.get("/get",GetAllProduct);
ProductRouter.get("/get/:id",GetProductById);
ProductRouter.get("/search",SearchProducts);
module.exports={
    ProductRouter
}