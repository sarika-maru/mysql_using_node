const {con}=require('../config/config');

var addStud=((req,res)=>{
   // var sql= "insert into stud(stud_name,stud_gender,stud_sem) values('"+ req.body.stud_name +"','"+ req.body.stud_gender +"','"+req.body.stud_sem +"')";
    var sql=`CALL insertStud(?,?,?)`;
    var data=[req.body.stud_name,req.body.stud_gender,req.body.stud_sem]
    con.query(sql,data,(err,result)=>{
        if(err){throw err}
        console.log("successfully inserted"+ result);
        res.send("successfully inserted");
    });
   //InsertStud();

})

var deleteStud=((req,res)=>{
    var sql= "delete from stud where stud_id="+ req.params.stud_id;

    con.query(sql,(err,result)=>{
        if(err){throw err}
        console.log("successfully deleted"+ result);
        res.send("successfully deleted");
    });
    //AfterStudDelete();

});

var getAllStud=((req,res)=> {
    var sql = "CALL getStud()";

    //getAllStudProcedure();
    con.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log("Students :" + result);
        res.send(result);
    })
})

var updateStud=((req,res)=>{
    var sql= "update stud set stud_name='"+ req.body.stud_name+"', stud_gender='" + req.body.stud_gender+"', stud_sem='"+req.body.stud_sem+"' where stud_id="+ req.body.stud_id;
    con.query(sql,(err,result)=>{
        if(err){throw  err}
        console.log("Successfully Updated");
        res.send("successfully Updated");
    })
})

//store procedure
var getAllStudProcedure=()=>{
    var sql="CREATE PROCEDURE getStud() BEGIN SELECT * FROM stud; END;"
    con.query(sql,(err,result)=>{
        if(err){throw err}
        console.log("successfully created");
    })
}
var InsertStud=()=>{
    var sql="CREATE PROCEDURE insertStud(IN stud_name varchar(50), IN  varchar(10), IN stud_sem int(3)) BEGIN insert into stud(stud_name,stud_gender,stud_sem) values(stud_name,stud_gender,stud_sem); END;"
    con.query(sql,(err,result)=>{
        if(err){throw err}
        console.log("successfully created inser procedure");
    })
}


//triggers
var AfterStudDelete=()=>{
    var sql="CREATE TRIGGER studBackUp AFTER DELETE ON stud FOR EACH ROW BEGIN insert into stud_backup values(old.stud_id,old.stud_name,old.stud_gender,old.stud_sem); END;";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("Trigger Created");
    })
}

module.exports= {addStud, getAllStud, deleteStud,updateStud}