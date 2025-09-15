var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {
    //asyncronous way for checking file ache ki nai
    //exists e protome file path jei ta ache ki na check korbo, porerta callback function
    fs.exists('index.html', function(exists) {
        if (exists) {
            res.end("file exists");
        }
        else
        {
            res.end("file not exists");
        }
    })


})
server.listen(8080);