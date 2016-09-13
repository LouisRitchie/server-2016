var http = require('http');

var server = http.createServer(function serve(req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  
  res.write('<h1>deppth</h1>');

  res.end();   
});

server.listen(80);
console.log('server running on http://127.0.0.1:80/');
