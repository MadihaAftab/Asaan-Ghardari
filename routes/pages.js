const express = require("express");
const router = express.Router();
const loggedin = require("../controller/loggedin")

const db = require ('../db');



router.get('/',function(req,res){
    res.render('adminProfile/Login');
    // res.render('adminProfile/Login', {root: "./public"}); //views is already set as a root folder and also dont use .ejs thats also already set

});

// router.get('/customerProfile/RegisterCustomer',function(req,res){
router.get('/customerProfile/RegisterCustomer',function(req,res){
    res.render('customerProfile/RegisterCustomer'); //views is already set as a root folder and also dont use .ejs thats also already set

});

// router.get('/dashboard',function(req,res){
//     res.render('adminProfile/Dashboard'); //views is already set as a root folder and also dont use .ejs thats also already set

// });

router.get('/adminProfile/Dashboard',function(req,res){
    console.log(`this is the admin cookie ${req.cookies.admin}`)
    res.render('adminProfile/Dashboard'); //views is already set as a root folder and also dont use .ejs thats also already set

});
router.get('/adminProfile/Customers',function(req,res){
    var query = "SELECT id,firstname,lastname,email,phone FROM custumers ";
    db.query(query,function(error,data){
        if (error) throw error;
        else{
            res.render('adminProfile/Customerse',{action:'list', sampleData:data}); //views is already set as a root folder and also dont use .ejs thats also already set
        }
    });

});
router.get('/adminProfile/Jobs',function(req,res){
    db.query('SELECT * FROM jobs', function(error,jobdata){
        if (error) throw error;
        else{
            db.query('SELECT firstname,lastname,Id FROM custumers WHERE Id=?',[jobdata.custumerid], function(error,custumername){
                if (error) throw error;
                res.render('adminProfile/Jobs',{action:'list',jobs:jobdata,name:custumername}); 
            })
        }})

});


router.get('/adminProfile/Workers',function(req,res){
    var query = "SELECT id,name, email, phone ,type,location,created_at FROM workers ";
    db.query(query,function(error,data){
        if (error) throw error;
        else{
            res.render('adminProfile/Workers',{action:'list', sampleData:data}); //views is already set as a root folder and also dont use .ejs thats also already set
        }
    });

});
// router.get('/adminProfile/Settings',function(req,res){
//     res.render('adminProfile/Settings'); //views is already set as a root folder and also dont use .ejs thats also already set

// });
router.get('/adminProfile/Login',function(req,res){
    res.clearCookie("UserRegistered")
    res.clearCookie("admin")
    res.redirect('/'); //views is already set as a root folder and also dont use .ejs thats also already set

});

router.get('/adminProfile/job_Details',function(req,res){
    res.render('adminProfile/job_Details'); //views is already set as a root folder and also dont use .ejs thats also already set

});


// router.get('/customerProfile/CustomerProfile',function(req,res){
//     res.render('customerProfile/CustomerProfile'); //views is already set as a root folder and also dont use .ejs thats also already set

// });

router.get('/customerProfile/CustomerProfile',loggedin,function(req,res){
    if(req.custumer){
        db.query('SELECT * FROM jobs WHERE custumerid = ?', [req.custumer.Id],function(error,jobdata){
            if (error) throw error;
            else{
        res.render('customerProfile/CustomerProfile',{action:'list',custumer:req.custumer,jobs:jobdata}); //views is already set as a root folder and also dont use .ejs thats also already set
            }})
    }
    else{
        res.send("Access denied")
    }

});


router.get('/customerProfile/editProfile',loggedin,function(req,res){
    if(req.custumer){
        res.render('customerProfile/editProfile',{custumer:req.custumer}); //views is already set as a root folder and also dont use .ejs thats also already set
    }
    else{
        res.send("Access denied")
    }

});


router.get('/customerProfile/jobDetails',loggedin,function(req,res){
    if(req.custumer){
        res.render('customerProfile/jobDetails',{custumer:req.custumer}); //views is already set as a root folder and also dont use .ejs thats also already set
    }
    else{
        res.send("Access denied")
    }

});







module.exports = router;