const fs = require('fs')
const fsPromises = require('fs/promises')
 
// forma convencional
// fs.readFile('customers_array.json', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(JSON.parse(data));
//     }
// })

fsPromises.readFile('./data/customers_array.json', {encoding: "utf-8"})
  .then((stream) => {
    console.log(JSON.parse(stream))
  })
  .catch(error => {
    console.log(error)
  })