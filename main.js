var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {
    //asyncronous
    //rename e protome old path ,tarpor new path, tarpor callback function
    fs.rename('documentaion.txt','documentation.txt',function(error){
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
})
server.listen(8080);