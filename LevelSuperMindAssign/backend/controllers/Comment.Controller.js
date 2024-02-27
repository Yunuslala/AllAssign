
const {CommentModel}=require("../models/CommentModel")
const { body, validationResult } = require("express-validator");

const PostComment=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const {comments,Userid,blogsId}=req.body;
        const postComment=await CommentModel.create({
            comments,userId:Userid,blogsId
        });
        res.status(201).send({"msg":"comment has been posted"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const UpdateComment=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const {updatedComments,commentId}=req.body;
        const updated=await CommentModel.update({comments:updatedComments},{where:{
            id:commentId
        }});
        res.status(202).send({"msg":"comment has been updated"})

    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const DeleteComments=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const commentID=req.params.id;
        const deleted=await CommentModel.destroy({
            where:{
                id:commentID
            }
        });
        res.status(204).send({"msg":"comment has been deleted"})

    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}





module.exports={
    PostComment,UpdateComment,DeleteComments
}