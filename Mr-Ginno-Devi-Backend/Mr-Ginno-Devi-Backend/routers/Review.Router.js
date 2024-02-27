const express = require("express");
const ReviewRouter = express.Router();
const {
  deleteReview,
  updateReviewById,
  getReviewSOfUserById,
  getReviewOfCars,
  AddReview,
} = require("../controller/Review.Controller");

ReviewRouter.post("/add", AddReview);
ReviewRouter.patch("/update/:id", updateReviewById);
ReviewRouter.get("/get", getReviewOfCars);
ReviewRouter.get("/get/:id", getReviewSOfUserById);
ReviewRouter.delete("/delete/:id", deleteReview);

module.exports = {
  ReviewRouter,
};
