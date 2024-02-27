const {categoryModel}=require("../models/category.model");
const { body, validationResult } = require("express-validator");

const AddCategory=async(req,res)=>{
    try {
        const {category}=req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        console.log(category)
        const CheckExistence=await categoryModel.find({category});
        if(CheckExistence.length!==0){
           return res.status(200).send({"msg":"category already exist"})
        }
        const PostCategory=new categoryModel({category});
        await PostCategory.save()

        res.status(201).send({"msg":"Category has been added"})
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const AllCategories=async(req,res)=>{
    try {
        const AvailableCategories=await categoryModel.find();
        res.status(200).send(AvailableCategories);
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}


module.exports={
    AddCategory,AllCategories
}