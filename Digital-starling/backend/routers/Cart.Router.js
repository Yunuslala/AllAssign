const express=require("express");
const CartRouter=express.Router();
const {IncreaseQuantity,CreateCartData,DeleteCartData,GetuserCartData}=require("../controllers/Cart.Controller")
const {Authentication}=require("../Middlewares/Authentication");
CartRouter.use(Authentication);
CartRouter.post('/Add',CreateCartData);
CartRouter.delete('/delete/:id',DeleteCartData);
CartRouter.patch('/Increase/Quantity/:id',IncreaseQuantity);
CartRouter.get('/get',GetuserCartData);
module.exports={
    CartRouter
}