 var http = require('http');

 var server = http.createServer(function(reg, res){
 	res.write('hello');
 	res.end();

 });
 server.listen(8080);

 //go to http://localhost:8080 in a browser to see it