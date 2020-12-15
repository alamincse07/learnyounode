var http = require('http'),
   httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

// Change the api url if needed and token
var targetUrl ='https://dev.placetostay.rent/'
var token ='test'



proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('x-token', token);
});

var server = http.createServer(function(req, res) {

  proxy.web(req, res, {
    target: targetUrl,
    secure: false ,
  });
});



console.log("Currently communicating with  remote api { "+ targetUrl+ " }, change if needed  for url and token ")

console.log("SET frontend config  `API  Urls ` as  ==> http://localhost:5050/")
server.listen(5050);