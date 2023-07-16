var db = require("./routes/db-config")


db.connect((err)=>{
    if (err) throw err;
    console.log("db from db.js")
})

module.exports = db;