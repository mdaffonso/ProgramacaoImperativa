const sayHi = (value) => {
  console.log(`Olá, ${value.nome} ${value.sobrenome}! Tudo bem com você?`)
}

sayHi({ nome: "Matheus", sobrenome: "Andrade" }) // <-- argumento é um objeto literal

const pessoa = { nome: "Vitor", sobrenome: "Bessoni" } // <-- definição da variável pessoa é um objeto literal
sayHi(pessoa) // <-- argumento não é um objeto literal