// this is the main file provider of everything

var express = require ('express')
var db = require("./routes/db-config")
var ejs = require('ejs') //allow us to pass data to html


var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

// making server
app.get('/',function(req,res){
    res.render('pages/login'); //views is already set as a root folder and also dont use .ejs thats also already set

});

app.listen(2000,()=>{
    console.log("server is listening at port 2000")
});