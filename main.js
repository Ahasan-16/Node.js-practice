var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {


    //syncronous
    //renameSync protome old path tarpor newpath , ei ta error return kore
    var error=fs.renameSync('documentation.txt','newDocumentation.txt');
    if(error){
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write("file rename fail");
        res.end();
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("file rename success");
        res.end();
    }

})
server.listen(8080);