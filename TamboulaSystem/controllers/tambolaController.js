const { GenerateAllTickets}=require("../utils/ticketGenerator");
const { ticketModel } = require("../Models/ticketModel");
const { body, validationResult } = require("express-validator");


 const ticketGeneration = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Handle validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.params);
    let size = req.params.size;
    console.log(size)
    let tickets = GenerateAllTickets(size);
    let user = req.body.dataid;
    const savedTicket = new ticketModel({ tickets, user });
    await savedTicket.save();
    console.log(savedTicket);
    const objectId = savedTicket._id;
    const objectIdString = objectId.toString();
    console.log("token", objectIdString);
    res.status(200).send(savedTicket);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};


 const AllTickets= async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const AllSavedTickets = await ticketModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
      
    res.status(200).send(AllSavedTickets);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong" });
  }
}



 const TicketById=  async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Handle validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    let { id } = req.params;
    console.log(id);
    const AllSavedTickets = await redisClient.GET(id);
    console.log(AllSavedTickets);
    if (AllSavedTickets) {
      res.status(200).send(AllSavedTickets);
    } else {
      res.status(404).send({ msg: "token is Invalid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
}

 const TicketGeneratesByParticularUser= async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Handle validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    let { id } = req.params;
    let allTicketsByUser = await ticketModel.find({ user: id });
    if (!allTicketsByUser) {
      return res.status(401).send({ msg: "Id is not valid" });
    }
    res.status(200).send(allTicketsByUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
}

//     let ans=GenerateAllTickets(8);
// console.log(ans)
module.exports={
  ticketGeneration,AllTickets,TicketById,TicketGeneratesByParticularUser
}