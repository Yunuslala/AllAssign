const express=require("express");
const app=express();
const {connection}=require("./cofig/db");
const {UserRoute}=require("./routes/user.route");
const {ProductRoute}=require("./routes/product.route");
const { categoryRoute}=require("./routes/category.route");
const {CartRouter}=require("./routes/cart.route");
const {AdminRouter}=require("./routes/Admin.route")
const {OrderRoute}=require("./routes/order.route");
require("dotenv").config();
const path=require("path")
app.use(express.json());
const rateLimit = require('express-rate-limit');
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI=require("swagger-ui-express");
const {Authorizejob}=require("./utils/cron-job")
Authorizejob.start()


app.get("/",(req,res)=>{
  res.send("server is running")
})
const userLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, // Maximum requests per IP in the specified window
  message: 'Too many requests from this IP for User routes, please try again later.',
});

const categoryLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 10, 
  message: 'Too many requests from this IP for Category routes, please try again later.',
});

const productLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 300, 
  message: 'Too many requests from this IP for Product routes, please try again later.',
});

const cartLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 200, 
  message: 'Too many requests from this IP for Cart routes, please try again later.',
});

const orderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 200, 
  message: 'Too many requests from this IP for Order routes, please try again later.',
});

const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, 
  message: 'Too many requests from this IP for Admin routes, please try again later.',
});



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/User",userLimiter,UserRoute);
app.use("/category",categoryLimiter,categoryRoute);
app.use("/Product",productLimiter,ProductRoute);
app.use('/Cart',cartLimiter,CartRouter);
app.use('/Order',orderLimiter,OrderRoute);
app.use("/admin",adminLimiter,AdminRouter);







app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected")
        console.log(error)
    }
    console.log(`http://localhost:${process.env.port}`)
})