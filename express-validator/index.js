const express = require("express");
const { body } = require("express-validator");
const { validationResult } = require("express-validator")
const app = express();

const PORT = 5443;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get("/test", (req, res) => {
    res.send("testing the server");
});

// name , email, password, dob

// api/register

app.post("/api/register", 
    //input validation
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is missing")
    .isLength({min: 5})
    .withMessage("Name must have at least 5 characters")
    .isLength({max: 31})
    .withMessage("Name can have maximum 31 characters")
    ,
    body("email")
    .trim()
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("not a valid email")
    ,
    body("password")
    .trim()
    .notEmpty()
    .withMessage("password is missing")
    .isLength({min: 5})
    .withMessage("password must have at least 5 characters")
    ,
    body("dob")
    .trim()
    .notEmpty()
    .withMessage("dob is missing")
    .isISO8601()
    .toDate()
    .withMessage("not a valid dob")
    ,(req, res, next) => {
        const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
  next();
    },
    (req, res)=>{
    try {
        const { name, email, password, dob } = req.body;
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

app.post("/api/login", 
    //input validation
    
    body("email")
    .trim()
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("not a valid email")
    ,
    body("password")
    .trim()
    .notEmpty()
    .withMessage("password is missing")
    .isLength({min: 5})
    .withMessage("password must have at least 5 characters")
    ,(req, res, next) => {
        const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
  next();
    },
    (req, res)=>{
    try {
        const {  email, password } = req.body;
        if(email === "anjumferdous110@gmail.com" && password === "12345") {
            return res.status(200).json({
                message: "user was logged In", 
            });
        } else{
            return res.status(404).json({
                message: "email and password do not mess", 
            });
        }
        
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`server is runing at http://localhost:${PORT}`);
})