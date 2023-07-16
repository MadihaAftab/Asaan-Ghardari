const db= require("../db")
const jwt = require("jsonwebtoken");
const loggedin = (req,res,next) => {
    if(!req.cookies.UserRegistered) return next();
    try{
        const decoded = jwt.verify(req.cookies.UserRegistered,process.env.JWT_SECRET);
        db.query('SELECT * FROM custumers WHERE id = ? ',[decoded.id],(error,result)=>{
            // if(error) return next();
            console.log(result[0].Id);
            req.custumer = result[0];
            return next();
        })
    } catch(err){
        if(err) return next()
    }
}

module.exports = loggedin;