// this is the main file provider of everything

// imported modules
var express = require ('express')
var cookie = require ('cookie-parser')
var ejs = require('ejs') //allow us to pass data to html
const path = require("path");
const { url } = require('inspector');
const { urlencoded } = require('body-parser');

// creating main app
var app = express();

// this code is used to change views from default folder to pages
const pagespath =path.join(__dirname,"./Pages")
app.set('views',pagespath);

// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookie());
app.use('/public/',express.static(path.join('./public')));
app.set('view engine','ejs');

app.use('/',require("./routes/pages.js"));
app.use('/auth',require('./routes/auth'));


app.listen(2000,()=>{
    console.log("server is listening at port 2000")
});