var http = require('http');


var server = http.createServer(function(reg, res){
 	
	 res.setHeader('content-type', 'text/html')
	 res.writeHead(200,'woot');
	 res.write('<!doctype html>');
	 res.write('<hmtl>')
	 res.write('<head><meta charset="utf-8"></head>')
	 res.write('<body>')
	 res.write('<h2>Hello world <h2>')
	 res.write('</body>')
	 res.write('</html>')
	 res.end();
 });
server.listen(8080,function(reg, res){
	console.log('its working!!!!!!!!!!! ')
});
