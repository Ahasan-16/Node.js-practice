var http = require('http');
var URL=require('url');

var server=http.createServer(function(req,res){
    //protome url ta copy kore dite hobe
    var myURL="https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=12";

    //parse method use korey url ta bibinno onso separate kora jai jeita object return kore
    var myURLObj=URL.parse(myURL,true);

    //object er maddome url er bibinno property deka jai
    var urlHostName=myURLObj.hostname;
    var urlPathName=myURLObj.pathname;
    var urlSearchName=myURLObj.search;


    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`URL Host Name: ${urlHostName} <br>`);
    res.write(`URL Path Name: ${urlPathName} <br>`);
    res.write(`URL Search Name: ${urlSearchName} <br>`);
    res.end();

});

server.listen(2020);
