
const express = require('express');
const router= express.Router();



router.get("/registar", (req, res) => {
  res.send("<h1> i am a get registar at home route </h1>");
  res.end();
});
router.get("/login", (req, res) => {
  res.send("<h1> i am a get login at home route </h1>");
  res.end();
});

router.get("/users", (req, res) => {
  res.send("<h1>i am a get users at home route </h1> ");
  res.end();
});

module.exports = router;
