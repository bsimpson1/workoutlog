var http = require('http');
​
var server = http.createServer(function(request, response) {
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(200, 'json content');
	response.write('{ "wizard" : "mithrandir" }');
	response.end();
});
​
server.listen(8080, function() {
	console.log("sending json content");
});
​
// headed to server from browser
var data = JSON.stringify({ wizard: "mithrandir" });
​
// parse after fetching from server
JSON.parse(data);