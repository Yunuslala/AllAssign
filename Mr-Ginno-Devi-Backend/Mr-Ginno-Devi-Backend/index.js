const express = require("express");
const { connection } = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const { ProfileRouter } = require("./routers/UserProfileRouter");
const {CategoryRouter}=require("./routers/Category.router")
const { OfferRouter } = require("./routers/Offer.Router");
const {CarRouter}=require('./routers/Car.Router')
const {CarBrandRouter}=require("./routers/Car.Brand.Router")
const {CarBookingRouter}=require("./routers/Car.Booking.Router")
const {SubscriptionRouter}=require("./routers/Subscription.Router")
const { TermsAndConditionRouter } = require("./routers/TermsAndCondition.Router");
const {SupportRouter}=require("./routers/Support.Router")
const {SubscriptionElegebilityRouter}=require("./routers/Subscritpion.detail.router")
const {ServiceFeedback}=require("./routers/Service.feedBack.Router")
const {ReviewRouter}=require("./routers/Review.Router")
const { FaqRouter } = require("./routers/Faq.Router");
const {ShippingCharges}=require("./routers/CarShipping.Charges.Router")


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.get('/', (req,res) => {
  res.status(200).send({"msg":"You are live now"})
})
app.use("/api/user",ProfileRouter)
app.use("/api/Availability/Category", CategoryRouter);
app.use("/api/Availability/Category", CategoryRouter);
app.use("/api/Offer", OfferRouter);
app.use("/api/Car", CarRouter);
app.use("/api/Car/Brand", CarBrandRouter);
app.use("/api/Car/Booking", CarBookingRouter);
app.use("/api/Subscription", SubscriptionRouter);





app.listen(process.env.port, async () => {
  try {
    await connection
    console.log("db is connected")
  } catch (error) {
    console.log(error)
    console.log("db is not connected")
  }
  console.log(`http://localhost:${process.env.port}`)
})