

module.exports = function(app,io){
  app.get('/',function(req,res){

    res.render('login');
  });

  app.get('/create',function(req.res){
    res.redirect('/chat');
  });

app.get('/chat',function(req,res){
  res.render('index');
});

//get a new socket.io application named chat
var chat = io.on('connection',function(socket){

socket.on('login',function(data){
  
})


})

}
