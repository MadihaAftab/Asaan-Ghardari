// this is the main file provider of everything

// imported modules
var express = require ('express')
var ejs = require('ejs') //allow us to pass data to html
const path = require("path");
const { url } = require('inspector');
const { urlencoded } = require('body-parser');

// creating main app
var app = express();

// this code is used to change views from default folder to pages
const pagespath =path.join(__dirname,"./Pages")
app.set('views',pagespath);

// modules
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/public/',express.static(path.join('./public')));
app.set('view engine','ejs');


// // Database connection
// var db = require("./routes/db-config")
// db.connect((err)=>{
//     if (err) throw err;
//     console.log("db connected")
// })

// // making server
// app.get('/',function(req,res){
//     // res.render('adminProfile/login'); //views is already set as a root folder and also dont use .ejs thats also already set
//     res.render('customerProfile/RegisterCustomer'); 
//     // res.render('customerProfile/CustomerProfile'); 

// });

app.use('/',require("./routes/pages.js"));
app.use('/auth',require('./routes/auth'));


app.listen(2000,()=>{
    console.log("server is listening at port 2000")
});