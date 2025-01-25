const app = require("./app")


app.use("*",(req,res)=>{
    res.status(404).send({
        message: "not a valid route"
    })
})

app.listen(3004,()=>{
    console.log("Server is runing http://localhost:3004");
})