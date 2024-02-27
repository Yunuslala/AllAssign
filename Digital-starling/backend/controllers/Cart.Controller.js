const {CartModel}=require('../models/Cart.Model')

const CreateCartData=async(req,res)=>{
    try {
        const {UserId,productId,quantity}=req.body;
       const createCart=await CartModel.findOneAndUpdate(
            { UserID: UserId },
            {
              $push: {
                products: { productId, quantity }
              }
            },
            { upsert: true, new: true },)
            console.log(createCart)
        res.status(201).send({"msg":"product has been added in cart"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const GetuserCartData=async(req,res)=>{
    try {
        const {UserId}=req.body;
        const findCartData=await CartModel.find({UserID:UserId});
        res.status(200).send(findCartData);
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const DeleteCartData=async(req,res)=>{
    try {
        const {id}=req.params;
        const {userId}=req.body;
        const deletCartData=await Cart.findOneAndUpdate(
            { UserID: userId },
            {
              $pull: {
                products: { productId: id }
              }
            },
            { new: true },
        )          
        res.status(204).send({"msg":"this cart data has been deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const IncreaseQuantity=async(req,res)=>{
    try {
        const {id}=req.params;
        const {query,UserId}=req.body;
        const findCartData=await CartModel.findOne({_id:id});
        let getQuantity=findCartData.quantity;
        if(query=="inc"){
            getQuantity=getQuantity+1
        }else if(query=="decr"){
            getQuantity=getQuantity-1
        }
        const UpdateQuanity=await CartModel.findOneAndUpdate({ UserID: UserId, 'products.productId': id },
        {
          $set: {
            'products.$.quantity': getQuantity
          }
        },
        { new: true },);
        res.status(204).send({"msg":"quantity has been updated"});
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

module.exports={
    IncreaseQuantity,CreateCartData,DeleteCartData,GetuserCartData
}