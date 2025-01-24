const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// JSON data

// app.post("/user",(req,res)=>{
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`Welcome ${name} <br> you are ${age}`);
// })


// Form Data

app.get("/register",(req,res)=>{
res.sendFile(__dirname + "/index.html")
})

app.post("/register",(req,res)=>{
    const fullname = req.body.fullname;
    const age = req.body.age;
    res.send(`My is ${fullname} and i am ${age} years old`);
})

module.exports = app;