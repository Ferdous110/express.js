const express = require('express');
const app = express();
const userRouter = require("./routes/users.route")

app.use("/api/user", userRouter);

app.get("/",(req, res) => {
  res.send("<h1> i am a get request at home route </h1> ");
  res.end();
});
app.get("/about", (req, res) => {
  res.send("<h1> i am a get request at about route </h1>");
  res.end();
});
app.post("/", (req, res) => {
  res.send("<h1> i am a post request at home route </h1>");
  res.end();
});
app.put("/", (req, res) => {
  res.send("<h1> i am a put request at home route </h1>");
  res.end();
});
app.delete("/", (req, res) => {
  res.send("<h1> i am a delete request at home route </h1>");
  res.end();
});

app.use((req, res) => {
  res.send("<h1> 404 !!! Not a valid url </h1>");
});



module.exports = app;