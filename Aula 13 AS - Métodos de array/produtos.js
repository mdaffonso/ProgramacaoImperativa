const products = [
  {
    name: "Catan",
    value: 199.99,
    quality: 7,
    status: true
  },

  {
    name: "Alchemists",
    value: 499.99,
    quality: 10,
    status: false
  },

  {
    name: "Viticulture",
    value: 249.99,
    quality: 9,
    status: false
  },

  {
    name: "Carcassonne",
    value: 149.99,
    quality: 6,
    status: true
  },

  {
    name: "Gloomhaven",
    value: 1600,
    quality: 10,
    status: true
  },

  {
    name: "Lords of Scotland",
    value: 99.99,
    quality: 8,
    status: true
  },

  {
    name: "Call of Cthulhu",
    value: 1200,
    quality: 9,
    status: true
  }
]

const carrinho = products.filter(({value, quality, status}) => (
  value >= 482
  && value <= 1600
  && quality > 6
  && status == true
))

const spacer = `------------------------------\n`
let formatted = ""
carrinho.forEach(product => {
  formatted += spacer
  formatted += `Produto:    ${product.name}\n`
  formatted += `Preço:      ${product.value}\n`
})
formatted += spacer
formatted += `Total:      ${carrinho.reduce((acc, curr) => acc + curr.value, 0)}\n`
formatted += spacer

console.log(formatted)