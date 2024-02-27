const mongoose=require("mongoose");


const ProductSchema=mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
});

const ProductModel=mongoose.model("Product",ProductSchema);

module.exports={
    ProductModel
}