const express = require("express");
const authcontroller = require("../controller/auth")
const createcontroller = require("../controller/create")
const updatecontroller = require("../controller/update")


const router = express.Router();


router.post('/',authcontroller.login)
router.post('/customerProfile/RegisterCustomer',authcontroller.register)
router.post('/customerProfile/RegisterCustomer',authcontroller.register)
router.post('/customerProfile/CustomerProfile',createcontroller.createjob)
router.post('/adminProfile/Workers',createcontroller.createworker)
router.post('/customerProfile/editProfile',updatecontroller.update)

module.exports = router;