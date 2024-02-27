const mongoose=require('mongoose');
const ticketSchema = mongoose.Schema({
    tickets: {
      type: Object,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  });

const ticketModel=mongoose.model('ticketsCollection',ticketSchema);

module.exports={
    ticketModel
}