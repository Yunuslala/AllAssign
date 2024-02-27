const {OrderModel}=require("../models/Order.Model");
const {CartModel}=require('../models/Cart.Model')

const CreateOrder=async(req,res)=>{
    try {
        const {UserId,CartIds}=req.body;
      
        const saveOrder=new OrderModel({CartId:CartIds,UserID:UserId});
        await saveOrder.save();
      
        res.status(200).send({"msg":"order has been placed"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

module.exports={
    CreateOrder
}