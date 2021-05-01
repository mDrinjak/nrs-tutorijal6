const http = require("http");
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./index.html", "UTF-8").pipe(res);
  }})
  .listen(8080);
