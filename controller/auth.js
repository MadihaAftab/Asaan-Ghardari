const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require ('../db');

exports.register = (req,res)=>{
    console.log(req.body);
    const {firstname, lastname , email , phone , address , Password } =req.body;
    db.query('SELECT email FROM custumers WHERE email = ?' ,[email], async (error,results)=> {
        if(error){
        console.log(error);
        }
        if(results[0]) {return res.json({status : "error", error:"Email has already been registered"})}
        else{
    
            let hashedpassword = await bcrypt.hash(Password,8);
            
            db.query('INSERT INTO custumers SET ?',{firstname: firstname,lastname: lastname , email: email, address: address , 	password:hashedpassword, phone :phone},(error,result)=>{
                if(error){
                    console.log(error);
                }
                else{
                    
                    res.redirect('/');
                    return
                }
            })
        }
    });
    }

exports.login = (req,res)=>{
    console.log(req.body);
    const {email ,password } =req.body;
    if(email == "admin123@asaanghardari.com" && password == "1234"){
        const token = jwt.sign({id:"admin"},process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRES
        })
        res.cookie("admin",token,{
        expires:new Date(Date.now()+50000),
        httpOnly : true,
       });
        return  res.redirect("/adminProfile/Dashboard");
    }
    db.query('SELECT * FROM custumers WHERE email = ?' ,[email], async (error,results)=> {
        if (error) throw error;     
        if(!results[0] || !(await bcrypt.compare(password,results[0].password))) return res.json({status:"error",error:"Incorrect Email or password"})

        else{
            const token = jwt.sign({id:results[0].Id},process.env.JWT_SECRET,{
                        expiresIn: process.env.JWT_EXPIRES
                    })
                    const cookieOptions ={
                        expiresIn:new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000)
                    }
                    res.cookie("UserRegistered",token,cookieOptions);
            res.redirect("/customerProfile/CustomerProfile");
        }
    }
    )}

