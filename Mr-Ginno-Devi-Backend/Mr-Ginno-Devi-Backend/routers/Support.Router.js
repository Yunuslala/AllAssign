const express = require("express");
const SupportRouter = express.Router();
const {
  deleteSupport,
  updateSupportById,
  getSupportOfCars,
  AddSupport,
} = require("../controller/Support.Controller");

SupportRouter.post("/add", AddSupport);
SupportRouter.patch("/update/:id", updateSupportById);
SupportRouter.get("/get", getSupportOfCars);
SupportRouter.delete("/delete/:id", deleteSupport);

module.exports = {
  SupportRouter,
};
