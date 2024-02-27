const {BlogModel}=require("../models/BlogModel");
const {Users}=require("../models/userModel");
const {CommentModel}=require("../models/CommentModel")
const { body, validationResult } = require("express-validator");

const BlockPost=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }

        const Id=req.params.id;
        const blockPosts=await BlogModel.update({isBlocked:true},{where:{
            id:Id
        }});
        res.status(204).send({"msg":"Blog has been blocked"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const UnBlockPost=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }

        const Id=req.params.id;
        const blockUsers=await Users.update({isBlocked:false},{where:{
            id:Id
        }});
        res.status(204).send({"msg":"User has been blocked"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const BlockUser=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }

        const Id=req.params.id;
        const blockUsers=await Users.update({isBlocked:true},{where:{
            id:Id
        }});
        res.status(204).send({"msg":"User has been blocked"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const UnBlockUser=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }

        const Id=req.params.id;
        const blockUsers=await Users.update({isBlocked:false},{where:{
            id:Id
        }});
        res.status(204).send({"msg":"User has been blocked"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const DeleteUser=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        
        const Id=req.params.id;
        const DeleteUsers=await Users.destroy({where:{
            id:Id
        }});
        res.status(204).send({"msg":"user has been deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


module.exports={BlockPost,UnBlockPost,UnBlockUser,BlockUser,DeleteUser}