//importing all required dependency modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var parseurl = require('parseurl');
var mysql = require('mysql');
var mongoose = require('mongoose');
const { appendFile } = require('fs');

const app = express();

//middlewares
//configure HTTP pipline
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//session Momory configuration
// var sessionOptions = {
//     secret:"secret",
//     resave:true,
//     saveUninitialized:false
// };

// //configure Interceptor for session Management
// app.use(function (req,res,next){
//     //define session variables
//     if(!req.session.views){
//         req.session.views = {};
//         req.session.views. 
//     }
// })


var routes = require("./routes");
routes(app);
//TO access static files
var staticFolder = express.static(path.join(__dirname,"public"));
app.use(staticFolder);

//Search a static file in public folder
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));

});

//app listner 
//app is running on port 6000
app.listen(6000);
console.log("First web app is listening on port 6000");

