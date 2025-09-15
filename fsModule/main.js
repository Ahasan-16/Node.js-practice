var http = require('http');

var fs=  require('fs');


var server=http.createServer(function(req,res) {
    //asyncronous method e file handle
    if (req.url === '/') {
        //readFile e protom parameter path,tarpor callback function
        fs.readFile('index.html', function (error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
})
server.listen(8080);
