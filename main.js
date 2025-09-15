var http = require('http');
var fs=  require('fs');

var server=http.createServer(function(req,res) {
    //syncronous method e file handle
    if (req.url === '/') {
        //readFileSync ek tai parameter path, r ei ta path er data  return kore
        var myData=fs.readFileSync('index.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(myData);
            res.end();

    }
})
server.listen(8080);