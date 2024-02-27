const express=require("express");
const app=express();
const {connection}=require("./config/db");
const {userRouter}=require("./routes/user.route");
const {ReportRouter}=require("./routes/report.route")
app.use(express.json());

app.get('/',async(req,res)=>{
    try {
        res.status(200).send({"msg":"deployed on aws"})
    } catch (error) {
        
    }
})


app.use("/user",userRouter);
app.use('/reports',ReportRouter);




async function connectToMongoDB() {
    try {
      await connection
  
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Connection error:', error);
    }
  }
connectToMongoDB();



module.exports={
    app
}
// app.listen(4500,()=>{
//     console.log("http://localhost:4500")
// })




