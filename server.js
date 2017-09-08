var http = require("http");
var server = http.createServer();

var url = require("url");

server.on("request", function(req, res){
	//console.log("request caught");
    console.log(req.url); 
    var incomingUrl = url.parse(req.url);
    console.log(incomingUrl);

    if (incomingUrl.path === "/hello"){
        res.writeHead(200);
        res.end("Hello, world!");
    }
    else if (incomingUrl.path === "/goodbye"){
        res.writeHead(200);
        res.end("Good-bye, world!");
    }
    else {
        res.writeHead(200);
        res.end("Resource not found.");
    }
});

server.listen(30000);

