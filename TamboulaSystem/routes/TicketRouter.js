const express = require("express");

const TicketRouter = express.Router();

const { authorization } = require("../middlewares/authorization");
TicketRouter.use(authorization);
const { check, validationResult } = require("express-validator");
const {
  ticketGeneration,
  AllTickets,
  TicketById,
  TicketGeneratesByParticularUser
} = require("../controllers/tambolaController");


TicketRouter.get(
  "/Tickets/:size",
  // Validate id parameter
  check("size").exists().isInt().withMessage("id must be an integer"),
  ticketGeneration
);

TicketRouter.get("/AllTicket", AllTickets);

TicketRouter.get(
  "/generated/Tickets/:id",
  check("id")
    .exists()
    .withMessage("id is required")
    .isString()
    .withMessage("id must be a string"),
  TicketById
);

TicketRouter.get(
  "/user/ticket/:id",
  check("id")
    .exists()
    .withMessage("id is required")
    .isString()
    .withMessage("id must be a string"),
    TicketGeneratesByParticularUser
);

module.exports = {
  TicketRouter,
};
