var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {

    //syncronous way file delete
    //unlinkSync e only file path,ei ta error return kore
        var error= fs.unlinkSync('new.txt');
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
server.listen(8080);