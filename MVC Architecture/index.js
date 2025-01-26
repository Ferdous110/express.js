const express = require("express");
const app = express();
const userRouter = require("./route/routes/users.route")
const productRouter = require("./route/routes/products.route")

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(userRouter);
app.use(productRouter);




app.use((req, res, next)=>{
    res.status(404).json({
        message:"resource not found"
    });
});


app.listen(PORT, ()=>{
    console.log(`Server is runing http://localhost:${PORT}`);
});