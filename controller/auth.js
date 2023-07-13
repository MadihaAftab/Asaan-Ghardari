var db = require("../routes/db-config")
const bcrypt = require('bcryptjs')


db.connect((err)=>{
    if (err) throw err;
    console.log("db from auth.js")
})


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
                    res.redirect('/CustomerProfile');
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
        return  res.redirect("/dashboard");
    }
    db.query('SELECT * FROM custumers WHERE email = ?' ,[email], async (error,results)=> {
        if (error) throw error;     
        if(!results[0] || !(await bcrypt.compare(password,results[0].password))) return res.json({status:"error",error:"Incorrect Email or password"})

        else{
            console.log(results[0].email)
            console.log(results[0].password)
            res.redirect("/CustomerProfile");
        }
    }
    )}

