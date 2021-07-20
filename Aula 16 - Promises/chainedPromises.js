const fsPromises = require('fs/promises')
const modPromise = require('./modularizedPromises')()

Promise.resolve(modPromise)
  .then(() => fsPromises.readFile("./data/customers_array.json", {encoding: "utf-8"}))
  .then(data => console.log(JSON.parse(data)))
  .catch(err => console.log(err))