const express=require("express");
const OrderRoute=express.Router();
const { Orderplaced,GetAllOrderHistory,GetparticularUserHistory}=require('../controllers/order.controller');
const {Authentication}=require('../middlewares/authentication')
const { body, validationResult } = require("express-validator");

OrderRoute.use(Authentication)
OrderRoute.post("/place",Orderplaced);
OrderRoute.get('/AllHistory',GetAllOrderHistory);
OrderRoute.get("/user/history",GetparticularUserHistory);


module.exports={
    OrderRoute
}