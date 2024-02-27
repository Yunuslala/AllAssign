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
      res.status(200).send({ msg: "CarBrands already exist" });
    } else {
      const saveCarBrands = new brandModel({ image, title });
      await saveCarBrands.save();
      res.status(201).send({ msg: "carBrands is added", data: saveCarBrands });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarBrands = async (req, res) => {
  try {
    const data = await brandModel.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "CarBrands does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarBrandsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await brandModel.findOne({ _id: id });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "CarBrands does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
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
      await brandModel.findByIdAndUpdate({ _id: id }, { image, title });
      const updateddata = await brandModel.findOne({ _id: id });
      console.log(updateddata, "updatedData");
      res.status(201).send({ msg: "carBrands is updated", data: updateddata });
    } else {
      res.status(404).send({ msg: "carBrands is not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteCarBrands = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await brandModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    res.status(204).send({ msg: "carBrands has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteCarBrands,
  updateCarBrandsById,
  getCarBrandsById,
  getCarBrands,
  AddCarBrands,
};
