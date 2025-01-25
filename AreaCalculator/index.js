// const express = require("express");
// const app = express();
const app = require("./app");
const PORT = 3003;

app.use((req,res)=>{
    res.send("404 !!! error")
});

app.listen(PORT, ()=>{
    console.log(`server is runing at http://localhost:${PORT}`);
});
