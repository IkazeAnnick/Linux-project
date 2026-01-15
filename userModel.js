import mongoose from "mongoose";

const userModel=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const user=mongoose.model("user",userModel);

export default user;