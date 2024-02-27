const mongoose=require("mongoose");

const OrderSchema=mongoose.Schema({
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'Carts',
        required:true
    }
})

const OrderModel=mongoose.model('orders',OrderSchema);

module.exports={
    OrderModel
}