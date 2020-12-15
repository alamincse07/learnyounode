const fetch = require("node-fetch");
let url ='https://public-api.lefttravel.com/property-details?property_id=AB-34061050'

const f1 = fetch(url)
const f2 = fetch(url)

Promise.all([f1, f2])
  .then(([res1, res2]) => {
    console.log('Array of results', res1, res2)
  })
  .catch(err => {
    console.error('error happened')
    console.error(err)
  })