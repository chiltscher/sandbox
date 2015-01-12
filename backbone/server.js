var http = require('http');
var express = require('express');
var app = express();
var util = require('util')

app.use(express.static(__dirname))
app.get('/home',
	function(req, resp)
	{
		resp.redirect('public/index.html')
	});

app.route('/doors').post(
	function(req, resp, next)
	{
		console.log('doors')
		util.puts(util.inspect(req));
	});



app.listen(8080);
console.log('Webserver is running ...')