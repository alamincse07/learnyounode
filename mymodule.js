const  fs = require('fs')
const  path = require('path')
module.exports = function (folder, ext, callback){

    fs.readdir(folder, function (err, content) {
        if (err) return callback(err)
        let files = content.filter((f)=>path.extname(f) == '.' + ext)
        callback(null, files)
      })
}