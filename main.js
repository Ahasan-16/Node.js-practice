var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {
    //syncronous way for checking file ache ki nai
    //existsSync e only file path jei ta ache ki na check korbo, ei ta exists kore ki na ei ta return kore
    var exists=fs.existsSync('index.html');
        if (exists) {
            res.end("file exists");
        }
        else {
            res.end("file not exists");
        }


})
server.listen(8080);