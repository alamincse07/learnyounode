const http =require('http')
var BufferList = require('bl')

const urlLists = process.argv.slice(2)
var urlFetched = {}

function showResults(){
    urlLists.map((url)=>{
        console.log(urlFetched[url])
    })
}


function getUrlResposne(url){
    return http.get(url, function(response){
        response.pipe(BufferList ((err,data)=>{
    
            if(err){ 
                return console.error(err)
            }
            urlFetched[url] = data.toString()
           if(Object.keys(urlFetched).length == urlLists.length){
               // show all response nowe
               showResults()
           }
           
        }));
        
    }).on('error', console.error);
}

urlLists.map((url)=>getUrlResposne(url))

// var bl = new BufferList()

// bl.append('hello')
// bl.append(' world')
// bl.append('\n')

// bl.duplicate().pipe(process.stdout, { end: false })

// console.log(bl.toString())

// solution using thre async lib
