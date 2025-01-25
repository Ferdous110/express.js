require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;

app.get("/",(req,res)=>{
    res.send("hello i am new route");
})

app.listen(PORT,()=>{
    console.log(`server is runing http://localhost:${PORT}`);
})