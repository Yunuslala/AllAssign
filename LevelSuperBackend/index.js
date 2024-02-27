const express=require("express");
const app=express();
const {connection}=require("./config/db");
const cors=require("cors");
const {UserRouter}=require("./routers/User.router");
const {CommentRouter}=require("./routers/comment.route");
const {BlogRouter}=require("./routers/Blog.route");
const {AdminRouter}=require("./routers/admin.route");


require('dotenv').config()
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send({"msg":"depolyed successfully"})
})
app.use("/user",UserRouter);
app.use("/Comments",CommentRouter);
app.use("/Blogs",BlogRouter);
app.use("/Admin",AdminRouter);




connection.sync().then(() => {
    app.listen(process.env.port, () => {
        console.log('Server is listening to the port : 3002');
    })
})