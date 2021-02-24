let http = require('http');

let server = http.createServer((req, res) => {
	res.end("Hi, selamat datang di nodejs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");