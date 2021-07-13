class Inventory {
  constructor() {
    this.products = []
    this.productTemplate = {
      name: '',
      price: 0,
      quantitySold: 0
    }
  }

  addOne(product) {
    this.products.push({
      ...this.productTemplate,
      ...product
    })
  }

  addMany(...products) {
    products.forEach(product => {
      this.products.push({
        ...this.productTemplate,
        ...product
      })
    })
  }

  getTotalRevenue() {
    return this.products.reduce((acc, curr) => acc + (curr.price * curr.quantitySold), 0)
  }

  getRevenueAfterTax() {
    return this.getTotalRevenue() * 0.55
  }

  getProductByName(arg) {
    if(typeof arg !== "string") {
      return "O argumento fornecido deve ser uma string."
    }
    return this.products.find(p => p.name.toLowerCase() === arg.toLowerCase())
  }

  getRevenueByProductName(arg) { 
    const product = this.getProductByName(arg)
    return typeof product === "string" ? product : product.price * product.quantitySold
  }

  getProductsThatSoldMoreThan(arg) {
    if(typeof arg !== "number"){
      return "O argumento fornecido deve ser um número."
    }

    return this.products.filter(product => product.quantitySold > arg)
  }

  getReportByRevenue() {
    return this.products
      .map(product => ({ ...product, totalRevenue: product.price * product.quantitySold }))
      .sort((a, b) => a.totalRevenue > b.totalRevenue ? -1 : 1)
  }

  updateProduct(name, newValue) {
    const product = this.getProductByName(name)
    
    if(typeof product === "string") {
      return product 
    }

    const updatedProducts = this.products.filter(p => p.name !== product.name)
    updatedProducts.push({
      ...product,
      ...newValue
    })
    
    this.products = updatedProducts
  }
}

const farm = new Inventory()
const products = [
  {
    name: "Arroz",
    price: 10,
    quantitySold: 5
  }, {
    name: "Feijão",
    price: 12,
    quantitySold: 7
  }, {
    name: "Pastel",
    price: 15,
    quantitySold: 12
  }
]

farm.addMany(...products)