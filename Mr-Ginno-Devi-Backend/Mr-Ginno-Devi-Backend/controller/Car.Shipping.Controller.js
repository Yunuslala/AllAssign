const { CarShippingModel } = require("../models/CarShiping.Charges.Model");
const { CarsModel } = require("../models/Cars.Model");

const AddShippingCharge = async (req, res) => {
  try {
    const CarId = req.params.id;
    let { Taxe, BookingCharge, ProcessingFee,RefundableDeposit } = req.body;
  let findExisting=await CarShippingModel.findOne({CarId})
    if (findExisting) {
     return res.status(200).send({"msg":"Already exist",findExisting})
    } else {
         const saveShippingCharge = new CarShippingModel({
           Taxe,
           BookingCharge,
           ProcessingFee,
           RefundableDeposit,
         });
         await saveShippingCharge.save();
         await CarsModel.findByIdAndUpdate(
           { _id: CarId },
           { CarAdditonalCharges: saveShippingCharge._id }
         );
        return res
           .status(201)
           .send({ msg: "shippingCharge is added", data: saveShippingCharge });
   }
 
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getShippingChargesOfCars = async (req, res) => {
  try {
    const { CarId } = req.params;
    const data = await CarShippingModel.find({ CarId });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "ShippingCharge does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};


const updateShippingChargeById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarShippingModel.findOne({ _id: id });
    let { Taxe, BookingCharge, ProcessingFee, RefundableDeposit } = req.body;
    if (data) {
      if (Taxe == "" || !Taxe) {
        Taxe = data.Taxe;
      }
      if (BookingCharge == "" || !BookingCharge) {
        BookingCharge = data.BookingCharge;
      }
      if (ProcessingFee == "" || !ProcessingFee) {
        ProcessingFee = data.ProcessingFee;
      }
      if (RefundableDeposit == "" || !RefundableDeposit) {
        RefundableDeposit = data.RefundableDeposit;
      }
      const updateddata = await CarShippingModel.findByIdAndUpdate(
        { _id: id },
        { Taxe, BookingCharge, ProcessingFee, RefundableDeposit },
        { new: true }
      );
      console.log(updateddata, "updatedData");
     return res.status(201).send({ msg: "shippingCharge is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "shippingCharge is not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteShippingCharge = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await CarShippingModel.findByIdAndDelete({ _id: id });
    await CarsModel.findOneAndDelete({ CarAdditonalCharges:id });
    console.log(findUser);
   return res.status(204).send({ msg: "shippingCharge has been deleted" });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteShippingCharge,
  updateShippingChargeById,
  AddShippingCharge,
  getShippingChargesOfCars,
};
