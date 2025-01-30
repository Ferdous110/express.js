const { getAllUsesr, createUser, updateUser } = require("../controllers/users.controller");

const  router = require("express").Router();

router.get("/", getAllUsesr);
router.post("/", createUser);
router.put("/:id", updateUser);

 module.exports = router;