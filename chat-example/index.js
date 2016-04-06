var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var express = require('express');
// Set .html as the default template extension
	app.set('view engine', 'html');

	// Initialize the ejs template engine
	app.engine('html', require('ejs').renderFile);

	// Tell express where it can find the templates
	app.set('views', __dirname + '/views');

	// Make the files in the public folder available to the world
	app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){

  res.render('login');
});

// function sendXHR(verb, resource, body, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(verb, resource);


io.on('connection',function(socket){
  console.log('a user connected');
  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});

io.on('connection',function(socket){
  socket.on('chat message',function(msg){
    console.log('message: '+msg);
  });
});

//when one more user connected or a user leave we will send this info to other user
io.on('connection',function(socket){
  socket.broadcast.emit('chat message','one more people connected');
  socket.on('disconnect',function(){
    socket.broadcast.emit('chat message','one people leave');
  });
});
//////////////////////////////////////

io.on('connection',function(socket){
  socket.on('chat message',function(msg){
   socket.broadcast.emit('chat message',msg);
  });
});

http.listen(7070,function(){
  console.log('listening on *:7070');
});
