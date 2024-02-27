const express=require('express');
const app=express();
const {connection}=require("./config/db");
const {UserRouter}=require("./routers/User.Router");
const {TaskRouter}=require("./routers/Task.Router");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const {options}=require("./swagger-js-docs/swagger.js-doc.option")
require('dotenv').config();
const cors=require("cors");
app.use(cors());
app.use(express.json());
const specs = swaggerJsdoc(options);
app.get('/',async(req,res)=>{
    res.status(200).send({"msg":"welcome"})
})
app.use('/todo-task-api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/User',UserRouter);
app.use('/Task',TaskRouter);




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected",error)
    }
    console.log(`http://localhost:${process.env.port}`)
})