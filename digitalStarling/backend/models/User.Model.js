const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    Name:String,
    password:String,
    email:String,
    mobileNumber:String
});
const UserModel=mongoose.model('User',UserSchema);

module.exports={
    UserModel
}