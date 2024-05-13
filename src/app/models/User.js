import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  contact:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
    timestamp: { type: Date, default: Date.now },
   
    });

    
const User = mongoose.models.usermodel || mongoose.model("usermodel", UserSchema);

export default User;