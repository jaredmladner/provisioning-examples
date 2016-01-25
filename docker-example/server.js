var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as “Automation for the People”
   response.end('<html><h3>Automation for the People</h3></html>');
}).listen(8888);

// Console will print the message
console.log('Server running at http://127.0.0.1:8888/');
