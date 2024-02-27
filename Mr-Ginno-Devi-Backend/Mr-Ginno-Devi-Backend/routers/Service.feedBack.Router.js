const express = require("express");
const ServiceFeedback = express.Router();
const {
  deleteServiceFeedback,
  updateServiceFeedbackById,
  getServiceFeedbackById,
  getServiceFeedback,
  AddServiceFeedback,
} = require("../controller/ServiceFeedback.Controller");

ServiceFeedback.post("/add", AddServiceFeedback);
ServiceFeedback.get("/get", getServiceFeedback);
ServiceFeedback.get("/get/:id", getServiceFeedbackById);

module.exports = {
  ServiceFeedback,
};
