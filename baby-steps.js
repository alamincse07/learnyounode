let sum = 0
// if(process.argv.length > 2){
//     process.argv.forEach((val)=>{
//         if(!isNaN(val)){
//             sum+= +val
//         }
//     })
// }

for( let i=2; i< process.argv.length ; i++){

    sum += Number(process.argv[i])
}
console.log(sum)