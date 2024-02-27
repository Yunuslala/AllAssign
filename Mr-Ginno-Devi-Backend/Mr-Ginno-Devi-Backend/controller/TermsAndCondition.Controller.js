const { TermsAndConditonModel } = require("../models/TermsAndCondition.Model");

const AddTermsAndCondition = async (req, res) => {
  try {
    let {  description, Type } = req.body;
    let findExisting = await TermsAndConditonModel.findOne({
      Type
    });
    if (findExisting) {
     return res.status(200).send({ msg: "TermsAndCondition already exist" });
    } else {
      const saveTermsAndCondition = new TermsAndConditonModel({
        Type,
        description,
      });
      await saveTermsAndCondition.save();
     return  res
        .status(201)
        .send({ msg: "termsAndCondition is added", data: saveTermsAndCondition });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getTermsAndCondition = async (req, res) => {
  try {
    const data = await TermsAndConditonModel.find();
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "TermsAndCondition does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getTermsAndConditionByType = async (req, res) => {
  try {
    const { type } = req.params;
    const data = await TermsAndConditonModel.findOne({ Type: type });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "TermsAndCondition does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateTermsAndConditionById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TermsAndConditonModel.findOne({ _id: id });
    let { Type,description } =
      req.body;
    if (data) {
      if (Type == "" || !Type) {
        Type = data.Type;
      }
      if (description == "" || !description) {
        description = data.description;
      }
      const updateddata = await TermsAndConditonModel.findByIdAndUpdate(
        { _id: id },
        { Type, description },
        { new: true }
      );
     return res
        .status(201)
        .send({ msg: "termsAndCondition is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "termsAndCondition is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteTermsAndCondition = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await TermsAndConditonModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    return res.status(204).send({ msg: "termsAndCondition has been deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteTermsAndCondition,
  updateTermsAndConditionById,
  getTermsAndConditionByType,
  getTermsAndCondition,
  AddTermsAndCondition,
};
