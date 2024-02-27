const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  title: { type: String },
  priceInfo: {
    amount: { type: String },
    Amountype: {
      type: String,
      enum: ["dollar", "ruppes"],
    },
    RentType: {
      type: String,
      enum: ["Monthly", "Yearly"],
    },
  },
  descFirst: { type: String },
  decSecond: { type: String },
});

const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema);
module.exports = {
  SubscriptionModel,
};
