const express=require("express");
const app=express();
const {UserRouter}=require('./routers/User.Router');
const {ProductRouter}=require("./routers/Product.Router")
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const {connection}=require("./configs/db");
const {OrderRouter}=require("./routers/Order.router");
const {CartRouter}=require("./routers/Cart.Router")
const {options}=require("./swagger-jsdoc/swagger.Options.config")
const cors=require('cors');
require('dotenv').config()
app.use(cors());
app.use(express.json());

const specs = swaggerJsdoc(options);
console.log(specs)
app.use('/e-commerce-api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use("/User",UserRouter);
app.use("/product",ProductRouter);
app.use("/CartRoute",CartRouter)
app.use("/Order",OrderRouter);


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error);
        console.log("db is not connected")
    }
    console.log(`http://localhost:${process.env.port}`)
})