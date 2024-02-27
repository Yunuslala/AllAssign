const { UserMOdel } = require("../Models/userModel");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const UserSignup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  try {
    const userexit = await UserMOdel.findOne({ email });
    if (userexit) {
      res.status(409).send({ msg: "user already exists" });
    }
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        console.log(err);
        res.status(401).send({ msg: "error in hashing the password ", err });
      } else {
        const user = new UserMOdel({ name, email, password: hash });
        await user.save();
        res.status(201).send({ msg: "you have been signup" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const UserLogin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    let { email, password } = req.body;
    console.log(email);
    let data = await UserMOdel.find({ email });
    if (data.length > 0) {
      bcrypt.compare(password, data[0].password, async (err, result) => {
        if (result) {
          var dataid = data[0]._id;
          var token = jwt.sign({ dataid }, process.env.secret, {
            expiresIn: "1h",
          });
          res.status(201).send({ msg: "You have been logged in", token });
        } else {
          console.log(err);
          res.status(402).send({ msg: "wrong password", err });
        }
      });
    } else {
      res.status(401).send({ msg: "You have not signup" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", err });
  }
};

module.exports = {
  UserSignup,
  UserLogin,
};
