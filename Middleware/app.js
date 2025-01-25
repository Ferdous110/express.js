const express = require("express");
const app = express();

const myMiddleware = (req, res, next) =>{
    console.log("Middleware Function");

    req.currentTime = new Date(Date.now());
    next();
}

app.use(myMiddleware); // every one use this middeleware

app.get("/", myMiddleware, (req,res)=>{
    console.log("I am home." + req.currentTime)
    res.send("<h1> My name is anjum ferdous </h1>");
})
app.get("/about", (req,res)=>{
    console.log("I am home." + req.currentTime)
    res.send("<h1> My name is  ferdous </h1>");
})

module.exports = app;