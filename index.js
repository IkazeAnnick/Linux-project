import express from 'express';
import db from "./db.js";

const app = express();
import users from './userModel.js';

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Message")
})
app.post("/register",(req,res) =>{
    console.log(req.body);
    const {name,email,password} = req.body
    try {
        
        const newUser = users.create ({
            name,email,password 

        });
        return res.status(200).json({
            "message": "the user is registered successfully",
            newUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message":"Error occured"
        })
    }
})
app.listen(3000, () =>{
    console.log("successful")
})
