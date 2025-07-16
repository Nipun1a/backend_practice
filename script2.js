const http = require('http');
const server = http.createServer(function (req, res) {
    res.end("hello world");
});
const port = 3000;
server.listen(port, function() {
    console.log("Server listening on port " + port);
});

// rectify this code 