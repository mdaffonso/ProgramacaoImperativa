const JSON = require('./expandedJSON')

const objeto = {
  NumInt: 5,
  St: "isto é uma string",
  Obj: {
    Num: 4,
    St: "isto TAMBÉM é uma string"
  },
  Arr: [
    "banana", "maçã", "uva", "joão"
  ]
}

const stringified = JSON.stringify(objeto)
console.log(stringified)

const parsed = JSON.parse(stringified)
console.log(parsed.St)

console.log(JSON.toCamelCase(stringified))