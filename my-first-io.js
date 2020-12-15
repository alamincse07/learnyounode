const  fs = require('fs')
const file =  fs.readFileSync(process.argv[2])
const lineCount  = file.toString().split('\n')
console.log(lineCount.length-1)