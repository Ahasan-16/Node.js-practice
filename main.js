var http=require('http');
var server=http.createServer(function(req,res){
    //kon request asle ki korbo oi ta handle korbo req parameter er maddome
    if(req.url=="/")
    {
        //response ta patabo head abong body niye res parameter er maddome
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is a home page</h1>');
        res.end();
    }
    else if(req.url=="/about")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is a about page</h1>');
        res.end();
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is a contact page</h1>');
        res.end();
    }

});
server.listen(4040);
console.log("server run successfully");