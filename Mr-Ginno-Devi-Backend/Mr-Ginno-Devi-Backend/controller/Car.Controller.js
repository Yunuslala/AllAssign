const { CarsModel } = require("../models/Cars.Model");

const AddCar = async (req, res) => {
  try {
    let image = [];

    let {
      title,
      name,
      desc,
      Rentamount,
      RentType,
      rating,
      reviews,
      city,
      Passengers,
      AirConditioning,
      Transmission,
      FuelType,
      Doors,
      DrivenKm,
      AvgSpeed,
      Hp,
      AirBag,
      Milage,
      deliveryType,
      ExtraFeatures,
      BrandId,
      TypeCategoryId,
      available,
      from,
      to,
      CarType,
      CarAdditonalCharges,
    } = req.body;
    title = title.toLocaleLowerCase();
    let findExisting = await CarsModel.findOne({ title });

    if (req.files) {
      for (let i = 0; i < req.files.length; i++) {
        let obj = {
          image: req.files[i].path,
        };
        image.push(obj);
      }
    }
    if (findExisting) {
      res.status(200).send({ msg: "Car already exist" });
    } else {
      const saveCar = new CarsModel({
        images: image,
        title,
        name,
        desc,
        Rentamount,
        RentType,
        rating,
        reviews,
        city,
        Passengers,
        AirConditioning,
        Transmission,
        FuelType,
        Doors,
        DrivenKm,
        AvgSpeed,
        Hp,
        AirBag,
        Milage,
        deliveryType,
        ExtraFeatures,
        BrandId,
        TypeCategoryId,
        available,
        from,
        to,
        CarType,
        CarAdditonalCharges,
      });
      await saveCar.save();
     return res.status(201).send({ msg: "car is added", data: saveCar });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCars = async (req, res) => {
  try {
    const data = await CarsModel.find().populate(
      "BrandId",
      "TypeCategoryId",
      "CarAdditonalCharges",
      "reviews.reviewId"
    );
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Car does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarsModel.findOne({ _id: id });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Car does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarsModel.findOne({ _id: id });
    let {
      title,
      name,
      desc,
      Rentamount,
      RentType,
      rating,
      reviews,
      city,
      Passengers,
      AirConditioning,
      Transmission,
      FuelType,
      Doors,
      DrivenKm,
      AvgSpeed,
      Hp,
      AirBag,
      Milage,
      deliveryType,
      ExtraFeatures,
      BrandId,
      TypeCategoryId,
      available,
      from,
      to,
      CarType,
      CarAdditonalCharges,
    } = req.body;
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
      if (desc == "" || !desc) {
        desc = data.desc;
      }
      if (title == "" || !title) {
        title = data.title;
      }
      if (name == "" || !name) {
        name = data.name;
      }
      if (Rentamount == "" || !Rentamount) {
        Rentamount = data.Rentamount;
      }
      if (RentType == "" || !RentType) {
        RentType = data.RentType;
      }
      if (rating == "" || !rating) {
        rating = data.rating;
      }
      if (reviews == "" || !reviews) {
        reviews = data.reviews;
      }
      if (city == "" || !city) {
        city = data.city;
      }
      if (Passengers == "" || !Passengers) {
        Passengers = data.Passengers;
      }
      if (AirConditioning == "" || !AirConditioning) {
        AirConditioning = data.AirConditioning;
      }

      if (Transmission == "" || !Transmission) {
        Transmission = data.Transmission;
      }
      if (FuelType == "" || !FuelType) {
        FuelType = data.FuelType;
      }
      if (Doors == "" || !Doors) {
        Doors = data.Doors;
      }
      if (DrivenKm == "" || !DrivenKm) {
        DrivenKm = data.DrivenKm;
      }

      if (AvgSpeed == "" || !AvgSpeed) {
        AvgSpeed = data.AvgSpeed;
      }

      if (Hp == "" || !Hp) {
        Hp = data.Hp;
      }

      if (AirBag == "" || !AirBag) {
        AirBag = data.AirBag;
      }

      if (Milage == "" || !Milage) {
        Milage = data.Milage;
      }

      if (deliveryType == "" || !deliveryType) {
        deliveryType = data.deliveryType;
      }

      if (ExtraFeatures == "" || !ExtraFeatures) {
        ExtraFeatures = data.ExtraFeatures;
      }

      if (BrandId == "" || !BrandId) {
        BrandId = data.BrandId;
      }

      if (TypeCategoryId == "" || !TypeCategoryId) {
        TypeCategoryId = data.TypeCategoryId;
      }

      if (available == "" || !available) {
        available = data.available;
      }

      if (from == "" || !from) {
        from = data.from;
      }

      if (to == "" || !to) {
        to = data.to;
      }

      if (CarType == "" || !CarType) {
        CarType = data.CarType;
      }
      if (CarAdditonalCharges == "" || !CarAdditonalCharges) {
        CarAdditonalCharges = data.CarAdditonalCharges;
      }

       const updateddata = await CarsModel.findByIdAndUpdate(
         { _id: id },
         {
           images,
           title,
           name,
           desc,
           Rentamount,
           RentType,
           rating,
           reviews,
           city,
           Passengers,
           AirConditioning,
           Transmission,
           FuelType,
           Doors,
           DrivenKm,
           AvgSpeed,
           Hp,
           AirBag,
           Milage,
           deliveryType,
           ExtraFeatures,
           BrandId,
           TypeCategoryId,
           available,
           from,
           to,
           CarType,
           CarAdditonalCharges,
           AverageRating: data.AverageRating,
         },
         { new: true }
       );
    
     return res.status(201).send({ msg: "car is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "car is not exist" });
    }
    85;
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
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
      });
      await CarsModel.findOneAndUpdate(
        {
          _id: userId,
        },
        { $push: { images: image } },{new:true}
      );
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await CarsModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
   return res.status(204).send({ msg: "car has been deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const CarFilterPaginationSearch = async (req, res) => {
  try {
    const {
      search,
      priceLowToHigh,
      priceHighToLow,
      Passengers,
      Transmission,
      FuelType,
      DrivenKm,
      CarType,
      BrandId,
      AverageRating,
      Distance,
      bestRated,
      Rating,
      CarAge,
      deliveryType,
    } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { name: { $regex: req.query.search, $options: "i" } },
        { desc: { $regex: req.query.search, $options: "i" } },
        { title: { $regex: req.query.search, $options: "i" } },
        { city: { $regex: req.query.search, $options: "i" } },
      ];
    }
    if (FuelType) {
      query.FuelType = FuelType;
    }
    if (deliveryType) {
      query.deliveryType = deliveryType;
    }
    if (Doors) {
      query.Doors = Doors;
    }
    if (DrivenKm) {
      query.DrivenKm = DrivenKm;
    }
    if (Passengers) {
      query.Passengers = Passengers;
    }
    if (Transmission) {
      query.Transmission = Transmission;
    }
    if (Rating) {
      query.AverageRating = Rating;
    }
    if (AverageRating) {
      query.AverageRating = AverageRating;
    }
    if (BrandId) {
      query.BrandId = BrandId;
    }
    
    let options = {
      page: Number(page) || 1,
      limit: Number(limit) || 15,
      sort: { createdAt: -1 },
      populate: "BrandId",
    };
    if (priceLowToHigh) {
      options.sort = { RentAmount: 1 };
    }

    if (priceHighToLow) {
      options.sort = { RentAmount: -1 };
    }
    if (CarAge) {
      options.sort = { CarAge: -1 };
    }
 if (bestRated) {
   options.sort = { AverageRating: -1 };
 }
    let data = await CarsModel.paginate(query, options);
    return res
      .status(200)
      .json({ status: 200, message: "Product data found.", data: data });
  } catch (error) {}
};

module.exports = {
  deleteCar,
  updateCarById,
  getCarById,
  getCars,
  AddCar,
  UpdateParticularCarsImage,
  CarFilterPaginationSearch,
};
