//Main file of our application

var express = require('express');
app = express();
//the new socket object bound to the express app and this will allow them to coexist

var io = require('socket.io').listen(app.listen(7070));



//require the conifuration and routes file
//pass the app and io as arguments to the returned functions

require('./config')(app,io);
require('./routes')(app,io);

console.log("Your application is running on http://localhost:' 7070");
