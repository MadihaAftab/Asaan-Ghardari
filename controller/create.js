const db = require ('../db');

exports.createjob = (req,res)=>{
    console.log(req.body);
    const {description, date, time, amount,type,location,customerId} = req.body;
    db.query('INSERT INTO jobs SET ?',{description:description, date:date,time:time,amount:amount,type:type,location:location,custumerid:customerId}, (error,results)=> {
        if (error) throw error;     
        else{

            res.redirect("/customerProfile/CustomerProfile");
        }
    })
}

exports.createworker = (req,res)=>{

    console.log(req.body);
        const {name, email, phone ,type,location} = req.body;
        db.query('INSERT INTO workers SET ?',{name:name, email:email,phone:phone,type:type,location:location}, (error,results)=> {
                if (error) throw error;     
                else{
            
               res.redirect('/adminProfile/Workers');
        }
    })
}