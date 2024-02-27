const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    amount: { type: String, required: true },
    Amountype: {
      type: String,
      enum: ["dollar", "ruppes"],
      required: true,
    },
    RentTenure: {
      type: String,
      required: true,
    },
    descFirst: { type: String, required: true },
    decSecond: { type: String, required: true },
    CarId: [{ CarId: { type: mongoose.Types.ObjectId, ref: "Car" } }],
  },
  {
    timestamps: true,
  }
);

const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema);
module.exports = {
  SubscriptionModel,
};
