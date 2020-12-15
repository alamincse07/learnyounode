var http = require('http');

var number = null;
var str = '';

http.get(process.argv[2], function(response){
    response.on('error', console.error);
    response.on('data', function(data){

        str +=  data.toString();
       
       
    });
    response.on('end', function(){
        console.log(str.length); 
        console.log(str); 
    })
}).on('error', console.error);



// using bi library
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })