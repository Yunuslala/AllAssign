const mongoose = require("mongoose");

const CarShippingSchema = mongoose.Schema(
  {
    carID: { type: mongoose.Types.ObjectId, ref: "Car" },
    Taxe: { type: Number },
    BookingCharge: { type: Number },
    ProcessingFee: { type: Number },
    RefundableDeposit: { type: Number },
  },
  {
    timestamps: true,
  }
);

const CarShippingModel = mongoose.model("CarShipping", CarShippingSchema);
module.exports = {
  CarShippingModel,
};
