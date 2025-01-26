
 const express = require('express');
const { getproducts, saveproducts } = require('../../controlers/Prducts.controler');


 const router = express.Router();

 router.get("/Products", getproducts);

router.post("/Products", saveproducts);

module.exports = router;