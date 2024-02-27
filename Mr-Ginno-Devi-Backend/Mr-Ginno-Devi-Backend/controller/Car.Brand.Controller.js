const { brandModel } = require("../models/Brands.Model");

const AddCarBrands = async (req, res) => {
  try {
    let image;
    let { title } = req.body;
    if (req.file) {
      console.log("req.body", req.file);
      image = req.file.path;
    }
    title = title.toLocaleLowerCase();
    let findExisting = await brandModel.findOne({ title });
    if (findExisting) {
     return res.status(200).send({ msg: "CarBrands already exist" });
    } else {
      const saveCarBrands = new brandModel({ image, title });
      await saveCarBrands.save();
     return res
       .status(201)
       .send({ msg: "carBrands is added", data: saveCarBrands });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarBrands = async (req, res) => {
  try {
    const data = await brandModel.find();
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "CarBrands does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarBrandsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await brandModel.findOne({ _id: id });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "CarBrands does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateCarBrandsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await brandModel.findOne({ _id: id });
    let { title } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    } else {
      image = data.image;
    }
    if (data) {
      if (title == "" || !title) {
        title = data.title;
      }
      console.log("data", title, image);
     const updateddata = await brandModel.findByIdAndUpdate(
       { _id: id },
       { image, title },
       { new: true }
     );
      
      console.log(updateddata, "updatedData");
     return res.status(201).send({ msg: "carBrands is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "carBrands is not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteCarBrands = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await brandModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
   return res.status(204).send({ msg: "carBrands has been deleted" });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteCarBrands,
  updateCarBrandsById,
  getCarBrandsById,
  getCarBrands,
  AddCarBrands,
};
