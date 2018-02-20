const mysql =require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "student",
    //port : 3306
    socketPath	 : "/Applications/MAMP/tmp/mysql/mysql.sock"

});

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected with mysql");
})

module.exports= {con};