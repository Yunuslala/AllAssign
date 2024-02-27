const { OfferModel } = require("../models/Offers.Model");

const AddOffer = async (req, res) => {
  try {
    let image;
    let { title, desc, discountAmount, discountType } = req.body;
    if (req.file) {
      console.log("req.body", req.file);
      image = req.file.path;
    }
    title = title.toLocaleLowerCase();
    let findExisting = await OfferModel.findOne({ title });
    if (findExisting) {
     return res.status(200).send({ msg: "Offer already exist" });
    } else {
      const saveOffer = new OfferModel({
        image,
        title,
        desc,
        discountAmount,
        discountType,
      });
      await saveOffer.save();
     return res.status(201).send({ msg: "offer is added", data: saveOffer });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getOffers = async (req, res) => {
  try {
    const data = await OfferModel.find();
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Offer does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await OfferModel.findOne({ _id: id });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Offer does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await OfferModel.findOne({ _id: id });
    let { title, desc, discountAmount, discountType } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    } else {
      image = data.image;
    }
    if (data) {
      if (title == "" || !title   ) {
        title = data.title;
      }
      if (desc=="" ||!desc ) {
        desc = data.desc;
      }
       if (discountAmount == "" || !discountAmount) {
         discountAmount = data.discountAmount;
       }
       if (discountType == "" || !discountType) {
         discountType = data.discountType;
       }
     const updateddata = await OfferModel.findByIdAndUpdate(
       { _id: id },
       {
         image,
         title,
         desc,
         discountType: discountType,
         discountAmount: discountAmount,
       },
       { new: true }
     );
     
     return res.status(201).send({ msg: "offer is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "offer is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await OfferModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    return res.status(204).send({ msg: "offer has been deleted" });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteOffer,
  updateOfferById,
  getOfferById,
  getOffers,
  AddOffer,
};
