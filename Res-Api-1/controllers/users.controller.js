let users = require("../models/user_model")
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUsesr =  (req, res) =>{
    res.status(200).json({users});
 };
 // create users
 const createUser =  (req, res) =>{
    const newUser = {
            id: uuidv4(),
            username: req.body.username,
            email: req.body.email,
        
    };
    users.push(newUser)
    res.status(200).json(users);
 };

 module.exports = {getAllUsesr, createUser};