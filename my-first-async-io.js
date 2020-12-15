const { error } = require('console')
const  fs = require('fs')
fs.readFile(process.argv[2],  'utf8', (err, buf)=>{
    if(err){
        console.error(err);
    }else{
        const lineCount  = buf.toString().split('\n')
        console.log(lineCount.length-1)
    }
} )
