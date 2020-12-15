const  fs = require('fs')
const  path = require('path')
// const dir = process.argv[2] || ''
// let  etx = process.argv[3] || ''
// if (dir && etx){
//     etx = '.'+etx
// }
// fs.readdir(dir, (err, content)=>{
//     if(err){
//         console.error(err);
//     }else{
//         const files = content.filter((f)=>path.extname(f) == etx)
//         files.map(file=>console.log(file))
//     }
// } )


const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})