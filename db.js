import mongoose from "mongoose";

const db = mongoose.connect("mongodb+srv://cikaze154:123@cluster0.mixc0id.mongodb.net/Blog-ap").then(()=>{
    console.log("Database is connected succesfully");
}).catch((error)=>{
    console.log("Not connected",error);
})

export default db;