const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
}) ;
app.get("/circle",(req, res)=>{
    res.sendFile(__dirname + "/circle.html");
}) ;
app.post("/circle",(req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`circle radius : ${radius}  <br> Area of  circle : ${area}`);
    
}) ;

app.get("/triangle",(req, res)=>{
    res.sendFile(__dirname + "/triangle.html");
}) ;
app.post("/triangle",(req, res)=>{
    const hight = req.body.hight;
    const base = req.body.base;
    const area = 0.5 * base * hight;
    res.send(`Triangle height : ${hight} and Triangle base : ${base} <br> Area of  Triangle : ${area}`);
}) ;



module.exports = app;