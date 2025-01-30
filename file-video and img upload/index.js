const express = require("express");
const { default: mongoose } = require("mongoose");
const multer = require("multer");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const PORT = 8006;

// connecting to DB

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/userTestdb");
        console.log("db is connected")
    } catch(error){
        console.log("db is not connect");
        console.log(error);
        process.exit(1);
    }
    }
   
    // creating schema and model

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "User name is required"]
        },
        image: {
            type: String,
            required: [true, "User image is required"]
        }
    })
    // model
    //const user = mongoose.model("User", userSchema);
    const User = mongoose.model("User", userSchema)


// file upload 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" + file.originalname;
      cb(null, name);
    }
  })
  
  const upload = multer({ storage: storage })

  // get api

app.get("/register", (req, res)=>{
    res.status(200).sendFile(__dirname + "/index.html");
});

app.get("/test", (req, res)=>{
    res.status(200).send("Test is upload");
});

app.post("/register", upload.single("image"), async (req, res)=>{
    try {
        const newUser = new User({
            name: req.body.name,
            image: req.file.filename
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, async ()=>{
    
    console.log(`Server is runing at http://localhost:${PORT}`);
    await connectDB();
});

app.use((req, res)=>{
    res.status(404).send("server not found");
})