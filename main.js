var http = require('http');

var server=http.createServer(function(req,res){
    res.end('server created by Ahasan');
});
server.listen(2020);
console.log("server run successful!");
