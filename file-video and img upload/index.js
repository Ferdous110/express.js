const express = require("express");
const multer = require("multer");
const app = express();

const PORT = 8006;

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

app.post("/register", upload.single("image"), (req, res)=>{
    res.status(200).send("File is uploaded");
});

app.listen(PORT, ()=>{
    console.log(`Sevber is runing at http://localhost:${PORT}`);
});

app.use((req, res)=>{
    res.status(404).send("server not found");
})