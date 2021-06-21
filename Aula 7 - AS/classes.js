function Restaurante(name, menu) {
  this.name = name;
  this.menu = menu;
  this.entrada = function() {
    return `Seja bem-vindo ao ${this.name}. Servimos os seguintes pratos: ${this.menu.join(', ')}. O prato do dia é o nosso fabuloso ${this.menu[Math.floor(Math.random()*(this.menu.length-1))]}.`
  }
}

const nome = "Pastelaria do Zé"
const menu = [
  "pastel de carne", 
  "pastel de queijo", 
  "pastel de camarão",
  "pastel alho e óleo",
  "pastel de legumes",
  "pastel à californiana",
  "pastel à parisiense"
]

const pastelaria = new Restaurante(nome, menu)
console.log(pastelaria.entrada())