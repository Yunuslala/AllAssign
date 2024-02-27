const express = require("express");
const ShippingCharges = express.Router();
const {
  deleteShippingCharge,
  updateShippingChargeById,
  AddShippingCharge,
  getShippingChargesOfCars,
} = require("../controller/Car.Shipping.Controller");

ShippingCharges.post("/add", AddShippingCharge);
ShippingCharges.patch("/update/:id", updateShippingChargeById);
ShippingCharges.get("/get/:CarId", getShippingChargesOfCars);
ShippingCharges.delete("/delete/:id", deleteShippingCharge);

module.exports = {
  ShippingCharges,
};
