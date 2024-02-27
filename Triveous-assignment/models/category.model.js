const mongoose=require("mongoose");

const categorySchema=mongoose.Schema({
    category:{
        type:String,
        required:true,
        unique:true
    }
});


const categoryModel=mongoose.model("categories",categorySchema);
module.exports={
    categoryModel
}