
const {UserMOdel}=require("../models/user.model");
const {ProductMOdel}=require("../models/product.model")

const blockUser=async(req,res)=>{
    try {
        const {id}=req.params;
        const blockUSer=await UserMOdel.findByIdAndUpdate({_id:id},{isBlocked:true});
        res.status(200).send({"msg":"user has been blocked",blockUSer})
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const deleteUser=async(req,res)=>{
    try {
        const {userId}=req.params;
        const DeleteProduct=await UserMOdel.findByIdAndDelete({_id:userId});
        res.status(204).send({"msg":"user has been deleted"})
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}


const DeleteProduct=async(req,res)=>{
    try {
        const {productId}=req.params;
        const DeleteProduct=await ProductMOdel.findByIdAndDelete({_id:productId});
        res.status(204).send({"msg":"product has been deleted"})
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

module.exports={
    blockUser,DeleteProduct,deleteUser
}