var http = require('http');

var fs=  require('fs');

var server=http.createServer(function(req,res) {
    if(req.url === '/'){
        var data= fs.readFileSync('home.html');
        res.end(data);
    }
    else if(req.url=='/contact')
    {
        var data= fs.readFileSync('contact.html');
        res.end(data);
    }
    else if(req.url=='/about')
    {
        var data= fs.readFileSync('about.html');
        res.end(data);
    }



})
server.listen(8080);