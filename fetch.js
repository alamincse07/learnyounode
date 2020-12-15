const fetch = require("node-fetch");
let url ='https://public-api.lefttravel.com/property-details?property_id=AB-34061050'

let name = fetch(url).then(response=>{
  return   response.json()
}).then(json_data=>{
  let n =  json_data.property_name
  //console.log(n)
  return n
})

console.log('here is the name: ')
name.then(info=>console.log(info))
console.log('-- it is fetched runtime ')