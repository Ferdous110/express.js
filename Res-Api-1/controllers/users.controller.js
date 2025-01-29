const users = require("../models/user_model")

const getAllUsesr =  (req, res) =>{
    res.status(200).json({users});
 };
 const createUser =  (req, res) =>{
    res.status(200).json({message: "i am create user"});
 };

 module.exports = {getAllUsesr, createUser};