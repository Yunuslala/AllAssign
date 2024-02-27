const { CarsModel } = require("../models/Cars.Model");

const AddCar = async (req, res) => {
  try {
    let image = [];

    let { title, name, desc, Rentamount, rentType, rating, reviews, city } =
      req.body;

    let findExisting = await CarsModel.findOne({ title });

    if (req.files) {
      for (let i = 0; i < req.files.length; i++) {
        let obj = {
          image: req.files[i].path,
        };
        image.push(obj);
      }
    }
    title = title.toLocaleLowerCase();
    if (findExisting) {
      res.status(200).send({ msg: "Car already exist" });
    } else {
      const saveCar = new CarsModel({
        images: image,
        title,
        name,
        desc,
        "rent.amount": Rentamount,
        "rent.type": rentType,
        reviews: reviews,
        rating,
        city,
      });
      await saveCar.save();
      res.status(201).send({ msg: "car is added", data: saveCar });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCars = async (req, res) => {
  try {
    const data = await CarsModel.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Car does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarsModel.findOne({ _id: id });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Car does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarsModel.findOne({ _id: id });
    let { title, city,name,desc,rating,rentamount,rentType } = req.body;
    let images = [];
    if (req.files) {
      for (let i = 0; i < req.files.length; i++) {
        let obj = {
          image: req.files[i].path,
        };
        images.push(obj);
      }
    } else {
      images = data.images;
    }
    if (data) {
      if (desc=="" || !desc || title == "" || !title || city == "" || !city || rentamount == "" || !rentamount || !rating || rating == "" || name == "" || !name || !comments || comments == "" || !rentType || rentType == "") {

        title = data.title;
        city = data.city;
        rating = data.rating;
        desc = data.desc;
        rentamount = data.rent.amount;
        rentType = data.rent.type;
        name = data.name;

      }
      console.log("data", title, images);
      await CarsModel.findByIdAndUpdate({ _id: id }, { images, title,city,rating,desc,'rent.amount':rentamount,'rent.type':rentType,name });
      const updateddata = await CarsModel.findOne({ _id: id });
      console.log(updateddata, "updatedData");
      res.status(201).send({ msg: "car is updated", data: updateddata });
    } else {
      res.status(404).send({ msg: "car is not exist" });
    }
    85;
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const UpdateParticularCarsImage = async (req, res) => {
  try {
    let image;
    const { id } = req.params;
    const { userId } = req.body;

    const findImage = await CarsModel.findOne({
      _id: userId,
      "images._id": id,
    });

    if (req.file) {
      image = req.file.path;
    }
    if (findImage) {
       await CarsModel.findOneAndDelete({
        _id: userId,
        "images._id": id,
      }
      );
      await CarsModel.findOneAndUpdate(
        {
          _id: userId,
        },
        { $push: { images: image } }
      );
    }
  } catch (error) {
     console.log(error);
     res.status(500).send({ msg: "something went wrong", error });
  }
};


const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await CarsModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    res.status(204).send({ msg: "car has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteCar,
  updateCarById,
  getCarById,
  getCars,
  AddCar,
  UpdateParticularCarsImage,
};
