const express = require("express");
const SubscriptionRouter = express.Router();
const { deleteSubscription,
  updateSubscriptionById,
  getSubscriptionById,
  getSubscription,
  AddSubscription,
  getSubscriptionsCarByRentTenure,
  AddCarInParticularSubscription, } = require("../controller/Subscripiton.Controller");


SubscriptionRouter.post("/add", AddSubscription);
SubscriptionRouter.patch("/update/:id", updateSubscriptionById);
SubscriptionRouter.get("/get", getSubscription);
SubscriptionRouter.get("/get/:id", getSubscriptionById);
SubscriptionRouter.get("/get/:id", getSubscriptionById);
SubscriptionRouter.get("/get/:tenure", getSubscriptionsCarByRentTenure);
SubscriptionRouter.delete("/delete/:id", deleteSubscription);
SubscriptionRouter.patch("/update/Cars/:id", AddCarInParticularSubscription);
module.exports = {
  SubscriptionRouter
}