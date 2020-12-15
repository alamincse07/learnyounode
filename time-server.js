var strftime = require('strftime') // not required in browsers
    // console.log(strftime('%B %d, %Y %H:%M:%S')) // => April 28, 2011 18:21:08
    // console.log(strftime('%F %T', new Date(1307472705067))) // => 2011-06-07 18:51:45

var net = require('net');

// function zeroPadding(nb) {
//     return (nb < 10) ? ('0' + nb) : (nb);
// }

// function formatDate(date) {
//     return date.getFullYear()
//         +'-'+zeroPadding((date.getMonth() + 1))
//         +'-'+zeroPadding(date.getDate())
//         +' '+zeroPadding(date.getHours())
//         +':'+zeroPadding(date.getMinutes());
// }

var server = net.createServer(function(socket) {
    var date = new Date();
    socket.end(strftime('%Y-%m-%d %H:%M', date) + '\n');
});

server.listen(Number(process.argv[2]));