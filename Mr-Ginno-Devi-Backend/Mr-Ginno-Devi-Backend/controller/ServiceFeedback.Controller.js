const { ServiceFedbackModel } = require("../models/ServiceFeedback.Model");

const AddServiceFeedback = async (req, res) => {
  try {
    let { Comments, rating, UserId } =
      req.body;
      const saveServiceFeedback = new ServiceFedbackModel({
        Comments,
        rating,
        UserID: UserId,
      });
      await saveServiceFeedback.save();
     return res
        .status(201)
        .send({ msg: "serviceFeedback is added", data: saveServiceFeedback });
   
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getServiceFeedback = async (req, res) => {
  try {
    const data = await ServiceFedbackModel.find();
    if (data) {
      return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "ServiceFeedback does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getServiceFeedbackById = async (req, res) => {
  try {
    const  {UserId}  = req.body;
    const data = await ServiceFedbackModel.findOne({ UserID: UserId });
    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(404).send({ msg: "ServiceFeedback does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateServiceFeedbackById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ServiceFedbackModel.findOne({ _id: id });
    let { title, amount, amountType, RentTenure, descFirst, decSecond } =
      req.body;
    if (data) {
      if (title == "" || !title) {
        title = data.title;
      }
      if (amount == "" || !amount) {
        amount = data.amount;
      }
      if (amountType == "" || !amountType) {
        amountType = data.amountType;
      }
      if (RentTenure == "" || !RentTenure) {
        RentTenure = data.RentTenure;
      }
      if (descFirst == "" || !descFirst) {
        descFirst = data.descFirst;
      }
      if (decSecond == "" || !decSecond) {
        decSecond = data.decSecond;
      }

      await ServiceFedbackModel.findByIdAndUpdate(
        { _id: id },
        { title, amount, amountType, RentTenure, descFirst, decSecond }
      );
      const updateddata = await ServiceFedbackModel.findOne({ _id: id });
      console.log(updateddata, "updatedData");
     return res
        .status(201)
        .send({ msg: "serviceFeedback is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "serviceFeedback is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteServiceFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await ServiceFedbackModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
   return res.status(204).send({ msg: "serviceFeedback has been deleted" });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteServiceFeedback,
  updateServiceFeedbackById,
  getServiceFeedbackById,
  getServiceFeedback,
  AddServiceFeedback,
};
