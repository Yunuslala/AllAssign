const mongoose = require("mongoose");

const CarBookingSchema = mongoose.Schema({
  CarId: { type: String },
  UserID: { type: String },
  status: { type: String, enum: ["booked", "canceled", "added"] },

});

const CarBookingModel = mongoose.model("CarBooking", CarBookingSchema);
module.exports = {
  CarBookingModel,
};
