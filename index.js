const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.status(200).json({message: "App running successfully"})
})

app.listen(3000, () => {
    console.log("App running on Port 3000")
})