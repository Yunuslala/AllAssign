const {TaskMOdel}=require('../models/Task.model');
const { body, validationResult } = require("express-validator");

const CreateTask=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const {name,Content,Userid}=req.body
        const saveTask=new TaskMOdel({name,Content,UserId:Userid});
        await saveTask.save();
        console.log("save task",saveTask);
        res.status(201).send({"msg":"Task is created"})
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const deleteTask=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const id=req.params.TaskId;
        const {Userid}=req.body;
        console.log("id",id);
        const deleteTask=await TaskMOdel.findOne({_id:id});
        if(Userid==deleteTask.UserId){
            await TaskMOdel.findByIdAndDelete({_id:id});
            res.status(204).send("task is deleted")
        }else if(Userid!=deleteTask.UserId){
            res.status(401).send({"msg":"You are not authorized for deleting this task"})
        }else{
            res.status(404).send({"msg":"did not find task"})
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}


const UpdateTask=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const id=req.params.taskId;
        const {Userid,...updateData}=req.body;
        console.log("id",id)
        console.log("updatedata",updateData)
        const deleteTask=await TaskMOdel.findOne({_id:id});
        console.log("deletetask",deleteTask)
        if(Userid==deleteTask.UserId){
           const result= await TaskMOdel.findByIdAndUpdate({_id:id},updateData);
            console.log("task is updated",result)
            res.status(201).send("task is updated")
        }else if(Userid!=deleteTask.UserId){
            res.status(401).send({"msg":"You are not authorized for updating this task"})
        }else{
            res.status(404).send({"msg":"did not find task"})
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const GetAllTask=async(req,res)=>{
    try {
        const AllTask=await TaskMOdel.find({availability:true});
        res.status(200).send(AllTask)
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

module.exports={
    CreateTask,deleteTask,UpdateTask,GetAllTask
}