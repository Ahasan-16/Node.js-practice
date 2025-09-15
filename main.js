var http = require('http');

var fs=  require('fs');


var server=http.createServer(function(req,res) {

    //writeFile protme file er name, tarpor file e ki content takbe ,tarpor call back function
    fs.writeFile('documentaion.txt', 'this is documentation', function (error, data) {
        if (error) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("file write fail");
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write("file write success");
            res.end();
        }

    })
})
server.listen(8080);