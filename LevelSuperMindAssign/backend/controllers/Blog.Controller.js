const {BlogsModel}=require("../models/BlogModel");
const { body, validationResult } = require("express-validator");


const  PostBlog=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        console.log("object",req.body)
        const {title,Content,Description,Userid}=req.body;
        console.log(Userid,"userId")

        const Blogs=await BlogsModel.create({
            title,
            Content,
            Description,
            userId:Userid
        });

        res.status(201).send({"msg":"Blog has been created",Blogs})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const  UpdateBlog=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const {title,Content,Description,id}=req.body;
        console.log({title,Content,Description,id})
       if(title){
        const updateBlog=await BlogsModel.update(
            {title},{where:{id}
        })
        res.status(202).send({"msg":"blog has been updated",updateBlog})
       }else if(Content){
        const updateBlog=await BlogsModel.update(
            {Content},{where:{id}
        })
        res.status(202).send({"msg":"blog has been updated",updateBlog})
       }else if(Description){
        const updateBlog=await BlogsModel.update(
            {Description},{where:{id}
        });
        res.status(202).send({"msg":"blog has been updated",updateBlog})
       }
       res.status(402).send({"msg":"provide any update parameters"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const  DeleteBlogs=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const id=req.params.id
        const removeBlog=await BlogsModel.destroy({
            where:{
                id
            }
        });
       res.status(204).send({"msg":"deleted blog"})

    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}







module.exports={
    PostBlog,UpdateBlog,DeleteBlogs
}