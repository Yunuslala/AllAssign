const {OrderModel}=require('../models/order.model');
const {CartModel}=require("../models/cart.model")
const Orderplaced=async(req,res)=>{
    try {
        const {cartId}=req.body;
        console.log("cartId",cartId)
        const updateInCart=await CartModel.findByIdAndUpdate({_id:cartId},{"status":"placed"});
        const OrderPlaced=new OrderModel({cartId});
        OrderPlaced.save()
        res.status(201).send({"msg":"order has been placed"})
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const GetAllOrderHistory=async(req,res)=>{
    try {
        const AllCartProducts = await CartModel.find({ 
            status: "placed"
          }) .populate('productId', 'title price description availability') 
          .populate('userId',"name email mobileNumber,role")
          .exec()
          const modifiedResponse = AllCartProducts.map((cartProduct) => {
            return {
              _id: cartProduct._id,
              productDetails: cartProduct.productId,
              userDetails: cartProduct.userId,
              status: cartProduct.status,
              isRemoved: cartProduct.isRemoved,
              quantity: cartProduct.quantity,
            };
          });
          res.status(200).send(modifiedResponse)
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}


const GetparticularUserHistory=async(req,res)=>{
    try {
        const {Userid}=req.body;
        const UserOrderHistory = await CartModel.find({userId:Userid,
            status: "placed"
          }) .populate('productId', 'title price description availability') 
          .populate('userId',"name email mobileNumber,role")
          .exec()
console.log(UserOrderHistory)
          if(!UserOrderHistory.length){
            return res.status(404).send({"msg":"Did not placed any order"})
        }
          const modifiedResponse = UserOrderHistory.map((cartProduct) => {
            return {
              _id: cartProduct._id,
              productDetails: cartProduct.productId,
              userDetails: cartProduct.userId,
              status: cartProduct.status,
              isRemoved: cartProduct.isRemoved,
              quantity: cartProduct.quantity,
            };
          });
     
        res.status(200).send(modifiedResponse)
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

module.exports={
    Orderplaced,GetAllOrderHistory,GetparticularUserHistory
}