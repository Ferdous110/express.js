 const express = require("express");
 const cors = require("cors");
 const bodyParser = require("body-parser");
const users = require("./models/user_model");
const usersRouter = require("./route/users.route")

 const app = express();
 app.use(cors());
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());



 app.use("/users", usersRouter)


// home route 

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

// route not found

app.use((req,res,next)=>{
    res.status(404).json({message: "Route not found "})
})
 
// server error

app.use((err, req, res, next)=>{
    res.status(500).json({message: "Something broke "});
});

 module.exports = app;