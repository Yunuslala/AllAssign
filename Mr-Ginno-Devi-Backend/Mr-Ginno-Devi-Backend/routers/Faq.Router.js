const express = require("express");
const FaqRouter = express.Router();
const {
  deleteFaq,
  updateFaqById,
  getFaqById,
  getFaqs,
  AddFaq,
} = require("../controller/Faq.Controller");

FaqRouter.post("/add", AddFaq);
FaqRouter.patch("/update/:id", updateFaqById);
FaqRouter.get("/get", getFaqs);
FaqRouter.get("/get/:id", getFaqById);
FaqRouter.delete("/delete/:id", deleteFaq);

module.exports = {
  FaqRouter,
};
