var express = require('express');
var bodyparser = require('body-parser');

var app = express();

port = process.env.PORT || 3000;

app.use(express.static(__dirname + ('/public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get("/", function(req, res){
	res.render('index.html');
});

app.get("/admin", function(req, res){
	res.render('admin.html');
});

var user;

app.get("/login", function(req, res){

	var a = req.query.uname;
	var b = req.query.pass;

	console.log(a);
	console.log(b);

	if(a == 'admin' && b == 'admin'){
		res.redirect('admin.html');
	} else {
		res.redirect('login.html');
	}
});	



app.listen(port, function(){
	console.log("Server running on Port No. "+port);
});