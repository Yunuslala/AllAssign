const express = require("express");
const TermsAndConditionRouter = express.Router();
const {
  deleteTermsAndCondition,
  updateTermsAndConditionById,
  getTermsAndConditionByType,
  getTermsAndCondition,
  AddTermsAndCondition,
} = require("../controller/TermsAndCondition.Controller");

TermsAndConditionRouter.post("/add", AddTermsAndCondition);
TermsAndConditionRouter.patch("/update/:id", updateTermsAndConditionById);
TermsAndConditionRouter.get("/get", getTermsAndCondition);
TermsAndConditionRouter.get("/get/:type", getTermsAndConditionByType);
TermsAndConditionRouter.delete("/delete/:id", deleteTermsAndCondition);

module.exports = {
  TermsAndConditionRouter,
};
