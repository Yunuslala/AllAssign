const { SupportModel } = require("../models/Support.Model");

const AddSupport = async (req, res) => {
  try {
    let { number,Email } = req.body;
    const saveSupport = new SupportModel({
      number,
      Email
    });
    await saveSupport.save();
   return res.status(201).send({ msg: "support is added", data: saveSupport });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getSupportOfCars = async (req, res) => {
  try {
    const data = await SupportModel.find();
    if (data) {
     return res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Support does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

// const getSupportById = async (req, res) => {
//   try {
//     const { UserId } = req.body;
//     const data = await SupportModel.findOne({ UserID: UserId });
//     if (data) {
//       res.status(200).send(data);
//     } else {
//       res.status(404).send({ msg: "Support does not exist" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ msg: "something went wrong", error });
//   }
// };

const updateSupportById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await SupportModel.findOne({ _id: id });
    let { number, Email } = req.body;
    if (data) {
      if (number == "" || !number) {
        number = data.number;
      }
      if (Email == "" || !Email) {
        Email = data.Email;
      }
       const updateddata = await SupportModel.findByIdAndUpdate({ _id: id }, { number, Email },{new:true});
    
     return res.status(201).send({ msg: "support is updated", data: updateddata });
    } else {
     return  res.status(404).send({ msg: "support is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteSupport = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await SupportModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    return res.status(204).send({ msg: "support has been deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteSupport,
  updateSupportById,
  AddSupport,
  getSupportOfCars,
};
