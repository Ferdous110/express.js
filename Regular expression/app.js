const express = require("express");
const app = express();


// app.get("/products/:id([0-9]+)",(req,res)=>{
//     res.send(`<h2>ID = ${req.params.id}</h2>`)
// })
app.get("/products/:id([0-9]{3})",(req,res)=>{
    res.send(`<h2>ID = ${req.params.id}</h2>`)
})
app.get("/products/:title([a-zA-z0-9]+)",(req,res)=>{
    res.send(`<h2>Title = ${req.params.title}</h2>`)
});


module.exports = app;