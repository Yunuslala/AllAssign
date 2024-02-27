const { OfferModel } = require("../models/UserModel");

const AddOffer = async (req, res) => {
  try {
    let image;
    let { title,desc,amount,type } = req.body;
    if (req.file) {
      console.log("req.body", req.file);
      image = req.file.path;
    }
    title = title.toLocaleLowerCase();
    let findExisting = await OfferModel.findOne({ title });
    if (findExisting) {
      res.status(200).send({ msg: "Offer already exist" });
    } else {
      const saveOffer = new OfferModel({ image, title,desc,'discount.amount':amount,'discount.type':type });
      await saveOffer.save();
      res.status(201).send({ msg: "offer is added", data: saveOffer });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getOffers = async (req, res) => {
  try {
    const data = await OfferModel.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Offer does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await OfferModel.findOne({ _id: id });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Offer does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await OfferModel.findOne({ _id: id });
    let { title,desc,amount,type } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    } else {
      image = data.image;
    }
    if (data) {
      if (title == "" || !title || desc=="" ||!desc || amount=="" || !amount || type=="" || !type) {
        title = data.title;
        desc = data.desc;
        amount = data.discount.amount;
        type = data.discount.type;

      }
      console.log("data", title, image);
      await OfferModel.findByIdAndUpdate({ _id: id }, { image, title,desc,'discount.amount':amount,'discount.type':type });
      const updateddata = await OfferModel.findOne({ _id: id });
      console.log(updateddata, "updatedData");
      res.status(201).send({ msg: "offer is updated", data: updateddata });
    } else {
      res.status(404).send({ msg: "offer is not exist" });
    }
    85;
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await OfferModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    res.status(204).send({ msg: "offer has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteOffer,
  updateOfferById,
  getOfferById,
  getOffers,
  AddOffer,
};
