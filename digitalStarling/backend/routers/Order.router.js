const express=require("express");
const OrderRouter=express.Router();
const {CreateOrder}=require("../controllers/Order.Controller")


OrderRouter.post('/Add',CreateOrder);
module.exports={
    OrderRouter
}