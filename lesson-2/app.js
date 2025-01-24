const express = require("express");
const app = express();

// use Query Parameters
// app.get("/",(req, res)=>{
//     // const id = req.query.id;
//     // const name = req.query.name;
//     const {id, name} = req.query; //Destructuring
//     res.send(`<h1>Student name is: ${name}<br>Student ID is : ${id}</h1>`); 
// })

// use Route parameters

// app.get("/userId/:id/Age/:age",(req, res)=>{
//     // const id = req.params.id;
//     // const age = req.params.age;
//     const {id, age} = req.params; //Destructuring
//     res.send(`<h1>Student id is: ${id}<br>Student age is : ${age}</h1>`); 
// })


// use Header parameters

app.get("/",(req, res)=>{
        const id = req.header("id");
        const name = req.header("name");
        //const {id, name} = req.query; //Destructuring
        res.send(`<h1>Student name is: ${name}<br>Student ID is : ${id}</h1>`); 
    })


module.exports = app;