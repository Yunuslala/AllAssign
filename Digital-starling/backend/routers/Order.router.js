const express=require("express");
const OrderRouter=express.Router();
const {CreateOrder}=require("../controllers/Order.Controller")
const {Authentication}=require("../Middlewares/Authentication");
OrderRouter.use(Authentication);
OrderRouter.post('/Add',CreateOrder);
module.exports={
    OrderRouter
}