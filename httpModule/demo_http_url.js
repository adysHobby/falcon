var http = require('http');

//Try with http://localhost:8080/summer
//Also try with http://localhost:8080/winter
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);
