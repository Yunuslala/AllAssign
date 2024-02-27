const express = require("express");
const SubscriptionElegebilityRouter = express.Router();
const {
  getSubscriptionElegebility,
  AddSubscriptionElegebility,
  getSubscriptionElegebilityById,
  updateSubscriptionElegebilityById,
  deleteSubscriptionElegebility,
} = require("../controller/Subscription.Details.Controller");

SubscriptionElegebilityRouter.post("/add", AddSubscriptionElegebility);
SubscriptionElegebilityRouter.patch("/update/:id", updateSubscriptionElegebilityById);
SubscriptionElegebilityRouter.get("/get", getSubscriptionElegebility);
SubscriptionElegebilityRouter.get("/get/:id", getSubscriptionElegebilityById);
SubscriptionElegebilityRouter.delete("/delete/:id", deleteSubscriptionElegebility);

module.exports = {
  SubscriptionElegebilityRouter,
};
