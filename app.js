var express = require('express');
var path = require('path');
var os=require("os");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url=require("url");
var querystring=require("querystring");
var fs=require("fs");
const PORT=8081;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
	var s=req.hostname;
	next();
});

app.get(["/admin/:num/:id","/aaa"], function(req, res, next) {
    next();
});

const IP=os.networkInterfaces().en0[1].address;
app.listen(PORT,()=>{
	console.log("链接成功！");
	console.log("IP地址为->",IP,"端口号->",PORT);
});
