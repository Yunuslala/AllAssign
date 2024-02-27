const { SubscriptionModel } = require("../models/Subscription.Model");

const AddSubscription = async (req, res) => {
  try {
  
    let { title, amount, amountType, RentType, descFirst, decSecond } =
      req.body;
    let findExisting = await SubscriptionModel.findOne({
      "priceInfo.RentType": RentType,
    });
    if (findExisting) {
      res.status(200).send({ msg: "Subscription already exist" });
    } else {
      const saveSubscription = new SubscriptionModel({
        title,
        "priceInfo.amount": amount,
        "priceInfo.amountType": amountType,
        "priceInfo.RentType": RentType,
        descFirst,
        decSecond
      });
      await saveSubscription.save();
      res.status(201).send({ msg: "subscription is added", data: saveSubscription });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSubscription = async (req, res) => {
  try {
    const data = await SubscriptionModel.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Subscription does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSubscriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionModel.findOne({ _id: id });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Subscription does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateSubscriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionModel.findOne({ _id: id });
    let { title, amount, amountType, RentType, descFirst,decSecond } = req.body;
    if (data) {
      if (title == "" || !title ) {
        title = data.title;
      }
      if (amount == "" || !amount) {
        amount=data.priceInfo.amount
      }
       if (amountType == "" || !amountType) {
         amountType = data.priceInfo.amountType;
      }
        if (RentType == "" || !RentType) {
          RentType = data.priceInfo.RentType;
      }
       if (descFirst == "" || !descFirst) {
         descFirst = data.descFirst;
      }
      if (decSecond == "" || !decSecond) {
        decSecond = data.decSecond;
      }

      await SubscriptionModel.findByIdAndUpdate(
        { _id: id },
        { title, amount, amountType, RentType, descFirst, decSecond }
      );
      const updateddata = await SubscriptionModel.findOne({ _id: id });
      console.log(updateddata, "updatedData");
      res.status(201).send({ msg: "subscription is updated", data: updateddata });
    } else {
      res.status(404).send({ msg: "subscription is not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await SubscriptionModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    res.status(204).send({ msg: "subscription has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteSubscription,
  updateSubscriptionById,
  getSubscriptionById,
  getSubscription,
  AddSubscription,
};
