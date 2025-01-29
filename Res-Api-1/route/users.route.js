const { getAllUsesr, createUser } = require("../controllers/users.controller");

const  router = require("express").Router();

router.get("/", getAllUsesr);
router.post("/", createUser);

 module.exports = router;