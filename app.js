// Include the Node HTTP library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = express();

// Set the public directory for our static files
app.use(express.static('./public'));

// Set the view engine
app.set('view engine', 'jade');
// Where to find the view files
app.set('views', './views');

// A route for the home page - will render a view
app.get('/', function(req, res) {
	res.render('index');
});

// A route for /say-hello - will render a view
app.get('/say-hello', function(req, res) {
	res.render('hello');
});

app.get('/test', function(req, res) {
	res.send('this is a test');
});

// Start the app
http.createServer(app).listen(3000, function(){
	console.log("App started");
});