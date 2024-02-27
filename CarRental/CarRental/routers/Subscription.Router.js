const express = require("express");
const SubscriptionRouter = express.Router();
const { deleteSubscription,
  updateSubscriptionById,
  getSubscriptionById,
  getSubscription,
  AddSubscription, } = require("../controller/Subscripiton.Controller");


SubscriptionRouter.post("/add", AddSubscription);
SubscriptionRouter.patch("/update/:id", updateSubscriptionById);
SubscriptionRouter.patch("/get", getSubscription);
SubscriptionRouter.patch("/get/:id", getSubscriptionById);
SubscriptionRouter.patch("/delete/:id", deleteSubscription);

module.exports = {
  SubscriptionRouter
}