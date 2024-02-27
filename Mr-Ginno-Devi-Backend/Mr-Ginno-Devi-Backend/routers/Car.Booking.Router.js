const { AddCarBooking, CancelCarbooking, GetUserCarBookingHistory } = require("../controller/Car.Booking.Controller");
const express=require("express")

const CarBookingRouter = express.Router();

CarBookingRouter.post("/add", AddCarBooking);
CarBookingRouter.post("/Cancel", CancelCarbooking);
CarBookingRouter.post("/User/History", GetUserCarBookingHistory);


module.exports = {
  CarBookingRouter
}