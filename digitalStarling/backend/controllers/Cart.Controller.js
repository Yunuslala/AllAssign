const {CartModel}=require('../models/Cart.Model')

const CreateCartData=async(req,res)=>{
    try {
        let {UserId,productId,quantity}=req.body;
        if(quantity==undefined){
            quantity=1;
        }
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
        const {UserId}=req.params;
        const findCartData=await CartModel.find({UserID:UserId}).populate("products.productId","id _id title price description category image rating").exec();
       let productsObj=findCartData[0].products;
    console.log(findCartData)
    if(findCartData.length==0){
        return res.status(200).send({"msg":"Cart is empty"})
    }
        res.status(200).send({products:productsObj,cartId:findCartData[0]._id});
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const DeleteCartData=async(req,res)=>{
    try {
        const {id,UserId}=req.params;
        
        console.log(id,UserId);
        const deletCartData=await CartModel.findOneAndUpdate(
            { UserID: UserId },
            {
              $pull: {
                products: { productId: id }
              }
            },
            { new: true },
        )  
        console.log("deletCartData",deletCartData)        
        res.status(204).send({"msg":"this cart data has been deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const IncreaseQuantity=async(req,res)=>{
    try {
        const {id}=req.params;
        const {query,UserId,productsId}=req.body;
        console.log(id,query,UserId,productsId);
        if(query=="inc"){
            const UpdateQuantity = await CartModel.findOneAndUpdate(
                {
                  UserID: UserId,
                  'products.productId': productsId
                },
                {
                  $inc: { 'products.$.quantity': 1 } // Decrement the quantity by 1
                },
                { new: true }
              );
        }else if(query=="decr"){
            const UpdateQuantity = await CartModel.findOneAndUpdate(
                {
                  UserID: UserId,
                  'products.productId': productsId
                },
                {
                  $inc: { 'products.$.quantity': -1 } // Decrement the quantity by 1
                },
                { new: true }
              );
        }
       
        res.status(204).send({"msg":"quantity has been updated"});
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

module.exports={
    IncreaseQuantity,CreateCartData,DeleteCartData,GetuserCartData
}