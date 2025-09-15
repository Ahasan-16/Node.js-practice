var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {

    //asyncronous file delete
    //unlink e protome file path jeita delete korbo , pore callback function
    fs.unlink('newDocumentation.txt', function(error){
        if(error){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write("file delete fail");
            res.end();
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write("file delete success");
            res.end();
        }
    })



})
server.listen(8080);