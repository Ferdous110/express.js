const express = require("express");
const userRouter = require("./routes/user");
const app = express();

const PORT = 5443;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api", userRouter)



app.get("/test", (req, res) => {
    res.send("testing the server");
});



app.listen(PORT, ()=>{
    console.log(`server is runing at http://localhost:${PORT}`);
})