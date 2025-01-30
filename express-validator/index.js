const express = require("express");
const app = express();

const PORT = 5443;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get("/test", (req, res) => {
    res.send("testing the server");
});

// name , email, password, dob

// api/register

app.post("/api/register", (req, res)=>{
    try {
        const { name, email, password, dob } = req.body;
        console.log(req.body)
        const newUser = {
            name, email, password, dob
        }
        return res.status(201).json({
            message: "user was created",
            user: newUser,
        });
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`server is runing at http://localhost:${PORT}`);
})