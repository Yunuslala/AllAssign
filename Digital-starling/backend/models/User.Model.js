const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    fulName:String,
    password:String,
    email:String,
    Contact:String
});
const UserModel=mongoose.model('User',UserSchema);

module.exports={
    UserModel
}