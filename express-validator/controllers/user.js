const registerUser = async (req, res)=>{
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
}

const loginUser = (req, res)=>{
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
}

module.exports = {registerUser, loginUser}