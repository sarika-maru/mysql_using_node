const {con}=require('./config/config');

con.connect(function (err) {

    if(err) throw  err;
    console.log("Connected");
    var sql = "insert into stud(stud_name,stud_gender,stud_sem) values('sarika','female','10')";

    con.query(sql,function (err) {
        if(err) throw err;
        console.log("Record Inserted");
    })


    var qry="delete from stud where stud_id=3";
    con.query(qry, function (err,result) {
        if(err) throw err;
        console.log("record deleted successfully: "+ result.affectedRows);
    })

    var qry="update stud set stud_name='arun',stud_gender='male' where stud_id=7";
    con.query(qry, function (err,result) {
        if(err) throw err;
        console.log(result.affectedRows  +" Updated");
    });

    var sql="select * from stud";
    con.query(sql,function (err,result,field) {
        if(err) throw err;
        console.log(result);
    })

});

