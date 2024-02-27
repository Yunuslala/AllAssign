const { CarBookingModel } = require("../models/Booking.Model");

const AddCarBooking = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).send({"msg":"something went wrong",error})
  }
}

const CancelCarbooking = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};


const GetUserCarBookingHistory = async (req, res) => {
  try {
    const data = await CarBookingModel.find({ UserId, status: "bookeed" });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({"msg":"Booking History Does not exist"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  AddCarBooking,CancelCarbooking,GetUserCarBookingHistory
}
