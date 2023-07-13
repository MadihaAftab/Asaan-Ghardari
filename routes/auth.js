const express = require("express");
const authcontroller = require("../controller/auth")
const router = express.Router();


router.post('/',authcontroller.login)
router.post('/customerProfile/RegisterCustomer',authcontroller.register)

module.exports = router;