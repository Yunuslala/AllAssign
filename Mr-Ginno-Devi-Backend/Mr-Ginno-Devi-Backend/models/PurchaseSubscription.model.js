const mongoose = require("mongoose");

const PurchaseSubscriptionSchema = mongoose.Schema(
  {
    UserId: { type: mongoose.Types.ObjectId, ref: "Subscription" },
    CarId: { type: mongoose.Types.ObjectId, ref: "Subscription" },
    
  
  },
  {
    timestamps: true,
  }
);

const PurchaseSubscriptionModel = mongoose.model("PurchaseSubscription", PurchaseSubscriptionSchema);
module.exports = {
  PurchaseSubscriptionModel,
};
