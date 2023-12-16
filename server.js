const express = require("express");
const cors = require("cors")

const app = express()

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({message:"successfully works"})
})

app.listen(5000, ()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
})