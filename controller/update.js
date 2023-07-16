const db = require ('../db');
const jwt = require("jsonwebtoken");
exports.update = (req,res)=>{
    console.log(req.body);
    const {firstname,lastname,email,address,phone,password,custumerId} = req.body;
    db.query('UPDATE custumers SET firstname=?, lastname=?, email=?, address=?, phone=? WHERE Id=?',
    [firstname, lastname, email, address, phone, custumerId], (error,results)=> {
        if (error) throw error;     
        else{

            res.redirect("/customerProfile/editprofile");
        }
    })
}