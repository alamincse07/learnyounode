const mymodule = require('./mymodule')
const folder = process.argv[2]
const ext =  process.argv[3]

const lists = function(err, content){
    if(err){ return console.log(err)}
   content.forEach(file=>console.log(file))
}
if ( folder && ext) {
    mymodule(folder,ext,lists)
}
