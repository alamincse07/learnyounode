var http = require('http');

http.createServer(onRequest).listen(9000);

function onRequest(client_req, client_res) {
  console.log('serve: ' + client_req.url);

  var options = {
    hostname: 'public-api.lefttravel.com',//http://public-api.lefttravel.com/property-details?property_id=HA-366032
    //hostname: 'www.google.com',//http://public-api.lefttravel.com/property-details?property_id=HA-366032
    port: 80,
    path: client_req.url,
    method: client_req.method,
    headers: client_req.headers
  };

  var proxy = http.request(options, function (res) {
    client_res.writeHead(res.statusCode, res.headers)
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}