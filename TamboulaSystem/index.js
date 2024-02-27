const express=require('express');
const app=express();
const {connection}=require("./config/db");
require('dotenv').config();
const {TicketRouter}=require('./routes/TicketRouter')
const {userRouter}=require('./routes/UserRouter')

app.use(express.json());
app.use(userRouter);
app.use(TicketRouter);







app.listen(process.env.port,async()=>{
  try {
    await connection
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
  console.log(`http://localhost:${process.env.port}`);
})