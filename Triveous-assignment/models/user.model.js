const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role:{
        type:String,
        default:"user"
      },
      mobileNumber: {
        type:Number,
        required: true
      },
      isBlocked:{
        type:Boolean,
        default:false
    },
})
UserSchema.index({ email: 1 });
const UserMOdel=mongoose.model('users',UserSchema);
module.exports={
    UserMOdel
}