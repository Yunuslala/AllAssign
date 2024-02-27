const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    productId:{
        type:String,
        ref: "products",
        required: true,
    },
    userId:{
        type: String,
        ref: "users",
        required: true,
    },
    status:{
        type:String,
        default:"Added in cart"
    },
    isRemoved:{
        type:Boolean,
        default:false
    },
    quantity:{
        type:Number,
        default:1
    }
});
cartSchema.index({productId:1})
const CartModel=mongoose.model("Carts",cartSchema);

module.exports={
    CartModel
}