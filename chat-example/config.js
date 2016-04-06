var express = require('express');

module.exports = function(app,io){
  //set .html as default template extension
  app.set('view engine','html');

  // Initialize the ejs template engine
	app.engine('html', require('ejs').renderFile);

  // Tell express where it can find the templates
	app.set('views', __dirname + '/views');

  // Make the files in the public folder available to the world
	app.use(express.static(__dirname + '/public'));

};
