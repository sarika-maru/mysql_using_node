const {con} = require('./config/config');
const express= require('express');
const bodyparser= require('body-parser');
const route= require('./route/route');

var app= express();

app.use(bodyparser.json());

route.route(app);


app.listen(3000,()=>{
    console.log('connected');
});
