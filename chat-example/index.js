var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});


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
