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
 // Update user 

 const updateUser =  (req, res) =>{
   const userid = req.params.id;
   const { username, email } = req.body;
   users.filter((user)=> user.id === userid).map((Selecteduser)=> {
      Selecteduser.username = username;
      Selecteduser.email = email;
   })
   res.status(200).json(users);
};

// delete user 

const deleteUser =  (req, res) => {
   const userid = req.params.id;
   users = users.filter((user) => user.id !== userid) 
   res.status(200).json(users);
};

 module.exports = {getAllUsesr, createUser, updateUser, deleteUser};