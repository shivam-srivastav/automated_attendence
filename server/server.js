import express from "express";
const app = express();



app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.listen(9000, ()=>{
    Console.log("Server is Running on port 9000")
})