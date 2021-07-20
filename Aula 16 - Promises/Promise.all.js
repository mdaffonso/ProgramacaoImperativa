const fs = require('fs')
const fsPromises = require('fs/promises')
 
// convencional
// function leitorDeArquivosMultiplos(){
//   return fs.readFile('file.json', (err, data1) => {
//       fs.readFile('file2.json', (err, data2) => {
//           fs.readFile('file3.json', (err, data3) => {
//               console.log(JSON.parse(data1))
//               console.log(JSON.parse(data2))
//               console.log(JSON.parse(data3))
//           })
//       })
//   })
// }

const leitorDeArquivosMultiplos = (...files) => {

  const filesFS = files.map(file => fsPromises.readFile(file, {encoding: "utf-8"}))

  Promise.all(filesFS)
    .then(results => {
      console.log(results.map(result => JSON.parse(result)))
    })
    .catch(err => {
      console.log(err)
    })
}
 
leitorDeArquivosMultiplos("./data/customers_array.json", "./data/customer_object_1.json")