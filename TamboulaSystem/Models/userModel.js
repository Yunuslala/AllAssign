const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: (value) => {
            // Custom email validation logic
            return /^\S+@\S+\.\S+$/.test(value);
          },
          message: 'Invalid email format',
        }
      },
      password: {
        type: String,
        required: true
      }
})
UserSchema.index({ email: 1 });
const UserMOdel=mongoose.model('users',UserSchema);
module.exports={
    UserMOdel
}