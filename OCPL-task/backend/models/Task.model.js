const mongoose=require('mongoose');
const TaskSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      Content: {
        type: String,
        required: true
      },
      UserId: {
        type: String,
        required: true
      },
      availability: { type: Boolean, default: true }
      
},
{
  timestamps: true, 
}
)


const TaskMOdel=mongoose.model('Tasks',TaskSchema);
module.exports={
    TaskMOdel
}