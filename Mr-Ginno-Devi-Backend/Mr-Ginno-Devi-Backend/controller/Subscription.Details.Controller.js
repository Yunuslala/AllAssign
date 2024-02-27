const { SubscriptionElegebilityModel } = require("../models/Subscription.Details.Model");

const AddSubscriptionElegebility = async (req, res) => {
  try {
    let { Question, Question1, Question2, Question3, Question4, QuestionType } =
      req.body;
    title = title.toLowerCase();
    let findExisting = await SubscriptionElegebilityModel.findOne({
      QuestionType,
    });
    if (findExisting) {
      return res.status(200).send({ msg: "SubscriptionElegebility already exist" });
    } else {
      const saveSubscription = new SubscriptionElegebilityModel({
        Question,
        Question1,
        Question2,
        Question3,
        Question4,
        QuestionType,
      });
      await saveSubscription.save();
      return res
        .status(201)
        .send({ msg: "subscription is added", data: saveSubscription });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSubscriptionElegebility = async (req, res) => {
  try {
    const data = await SubscriptionElegebilityModel.find();
    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(404).send({ msg: "SubscriptionElegebility does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSubscriptionElegebilityById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionElegebilityModel.findOne({ _id: id });
    if (data) {
      return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "SubscriptionElegebility does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateSubscriptionElegebilityById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionElegebilityModel.findOne({ _id: id });
    let { Question, Question1, Question2, Question3, Question4, QuestionType } =
      req.body;
    if (data) {
      if (Question == "" || !Question) {
        Question = data.Question;
      }
      if (Question1 == "" || !Question1) {
        Question1 = data.Question1;
      }
      if (Question2 == "" || !Question2) {
        Question2 = data.Question2;
      }
      if (Question3 == "" || !Question3) {
        Question3 = data.Question3;
      }
      if (Question4 == "" || !Question4) {
        Question4 = data.Question4;
      }
      if (QuestionType == "" || !QuestionType) {
        QuestionType = data.QuestionType;
      }

      await SubscriptionElegebilityModel.findByIdAndUpdate(
        { _id: id },
        { Question, Question1, Question2, Question3, Question4, QuestionType },
        {new:true}
      );
      const updateddata = await SubscriptionElegebilityModel.findOne({
        _id: id,
      });
      console.log(updateddata, "updatedData");
     return  res
        .status(201)
        .send({ msg: "SubscriptionElegebility is updated", data: updateddata });
    } else {
      return res.status(404).send({ msg: "SubscriptionElegebility is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteSubscriptionElegebility = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await SubscriptionElegebilityModel.findByIdAndDelete({
      _id: id,
    });
    console.log(findUser);
    return res.status(204).send({ msg: "SubscriptionElegebility has been deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  getSubscriptionElegebility,
  AddSubscriptionElegebility,
  getSubscriptionElegebilityById,
  updateSubscriptionElegebilityById,
  deleteSubscriptionElegebility,
};
