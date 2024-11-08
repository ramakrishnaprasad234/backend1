const vendorcontroller = require("../controllers/vandorController");
const express = require('express');


const router = express.Router()

router.post("/register",vendorcontroller.vendorRegister)
router.post("/login",vendorcontroller.vendorLogin)


// router.get('/all-vendors', vendorcontroller.getAllVendors);
// router.get('/single-vendor/:apple', vendorcontroller.getVendorById)

module.exports = router;