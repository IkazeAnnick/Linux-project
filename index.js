import express from 'express';
import db from "./db.js";

const app = express();
import users from './userModel.js';

app.use(express.json());

app.get("/", async(req,res) =>{
    res.send("Message sent by Anick's app");
    // try {
    //     const users = await 
    // } catch (error) {
    //      console.log(error);
    //     res.status(500).json({
    //         "message":"Error occured"
    //     })
    // }
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
// app.delete("/users/:id",async (req,res) =>{
//     const { id } = req.params;

//     try {
//         const deletedUser = await users.findByIdAndDelete(id);
        
//         if(!deletedUser) {
//             return res.status(404).json({
//                 message: "User not found"
//             });
//         }
//         return res.status(200).json({
//             message: "User deleted successfullly",
//             deletedUser
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Error occured"
//         });
//     }
// })
app.listen(3000, () =>{
    console.log("successful")
})


