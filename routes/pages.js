const express = require("express");
const router = express.Router();


router.get('/',function(req,res){
    res.render('adminProfile/Login');
    // res.render('adminProfile/Login', {root: "./public"}); //views is already set as a root folder and also dont use .ejs thats also already set

});

// router.get('/customerProfile/RegisterCustomer',function(req,res){
router.get('/customerProfile/RegisterCustomer',function(req,res){
    res.render('customerProfile/RegisterCustomer'); //views is already set as a root folder and also dont use .ejs thats also already set

});

router.get('/dashboard',function(req,res){
    res.render('adminProfile/Dashboard'); //views is already set as a root folder and also dont use .ejs thats also already set

});

router.get('/adminProfile/Dashboard',function(req,res){
    res.render('adminProfile/Dashboard'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/adminProfile/Customers',function(req,res){
    res.render('adminProfile/Customerse'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/adminProfile/Jobs',function(req,res){
    res.render('adminProfile/Jobs'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/adminProfile/Workers',function(req,res){
    res.render('adminProfile/Workers'); //views is already set as a root folder and also dont use .ejs thats also already set

});
// router.get('/adminProfile/Settings',function(req,res){
//     res.render('adminProfile/Settings'); //views is already set as a root folder and also dont use .ejs thats also already set

// });
router.get('/adminProfile/Login',function(req,res){
    res.redirect('/'); //views is already set as a root folder and also dont use .ejs thats also already set

});

router.get('/adminProfile/job_Details',function(req,res){
    res.render('adminProfile/job_Details'); //views is already set as a root folder and also dont use .ejs thats also already set

});


router.get('/CustomerProfile',function(req,res){
    res.render('customerProfile/CustomerProfile'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/customerProfile/CustomerProfile',function(req,res){
    res.render('customerProfile/CustomerProfile'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/customerProfile/jobDetails',function(req,res){
    res.render('customerProfile/jobDetails'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/customerProfile/editProfile',function(req,res){
    res.render('customerProfile/editProfile'); //views is already set as a root folder and also dont use .ejs thats also already set

});





module.exports = router;