var express = require('express'),
	app = express(),
	mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/blogApp");


app.route('/', function(req, res){

	res.render('index.html');

});


app.listen(8080);