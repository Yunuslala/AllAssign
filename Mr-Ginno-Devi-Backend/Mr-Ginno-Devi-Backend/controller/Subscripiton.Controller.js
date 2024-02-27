const { SubscriptionModel } = require("../models/Subscription.Model");
const { CarsModel } = require("../models/Cars.Model");

const AddSubscription = async (req, res) => {
  try {
    //CarIds will be array=["carID","carID",...]
    let {
      title,
      amount,
      amountType,
      RentTenure,
      descFirst,
      decSecond,
      CarIds,
    } = req.body;
    title = title.toLowerCase();
    let findExisting = await SubscriptionModel.findOne({
      title,
    });
    if (findExisting) {
     return res.status(200).send({ msg: "Subscription already exist" });
    } else {
      const saveSubscription = new SubscriptionModel({
        title,
        amount: amount,
        amountType: amountType,
        RentTenure: RentTenure,
        descFirst,
        decSecond,
        CarId: CarIds.map((CardId) => CardId),
      });
      await saveSubscription.save();
      CarIds.map(async (item) => {
        await CarsModel.findByIdAndUpdate(
          { _id: item },
          { SubscriptionId: saveSubscription._id }
        );
      });
     return res
        .status(201)
        .send({ msg: "subscription is added", data: saveSubscription });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSubscription = async (req, res) => {
  try {
    const data = await SubscriptionModel.find().populate("CarId.CarId");
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Subscription does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};


const getSubscriptionsCarByRentTenure = async (req, res) => {
  try {
    const RentTenure = req.params.tenure;
    const data = await SubscriptionModel.find({ RentTenure }).populate(
      "CarId.CarId"
    );
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Subscription does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSubscriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionModel.findOne({ _id: id });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Subscription does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateSubscriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionModel.findOne({ _id: id });
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

    const updateddata=  await SubscriptionModel.findByIdAndUpdate(
        { _id: id },
        {
          title,
          amount,
          CarId: data.CarId,
          amountType,
          RentTenure,
          descFirst,
          decSecond,
        },{new:true}
      );
     
     return res
        .status(201)
        .send({ msg: "subscription is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "subscription is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const AddCarInParticularSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SubscriptionModel.findOne({ _id: id });
    let { CarsId } = req.body;
    if (data) {
      await SubscriptionModel.findOneAndUpdate(
        { _id: id },
        { $push: { CarId: { $each: CarsId.map((CarId) => ({ CarId })) } } },
        { new: true }
      );

      const updateddata = await SubscriptionModel.findOne({ _id: id }).populate("CarId.CarId");
      console.log(updateddata, "updatedData");
      return res
        .status(201)
        .send({ msg: "subscription is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "subscription is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await SubscriptionModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    return res.status(204).send({ msg: "subscription has been deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteSubscription,
  updateSubscriptionById,
  getSubscriptionById,
  getSubscription,
  AddSubscription,
  getSubscriptionsCarByRentTenure,
  AddCarInParticularSubscription,
};
