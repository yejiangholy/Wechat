var http = require('http'),
    fs = require('fs'),
    url = require('url');
var bodyParser = require('body-parser');
var express = require('express');
    // Creates an Express server.
var app = express();

// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());

app.use(express.static('/WeChat/login.html'));


app.get('/',function(req,res){
  res.set('content-type','text/html');
  res.send(fs.readFileSync(__dirname+'/WeChat/login.html','utf8'));
});

app.listen(7070,function(){
  console.log("Server listening on: http://localhost:%s",7070);
});
