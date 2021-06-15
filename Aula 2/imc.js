const pessoas = [
    {
        nome: "José da Silva",
        idade: 27,
        peso: 83.5,
        altura: 1.7,
        plano: true
    },
    {
        nome: "Carlos de Souza",
        idade: 28,
        peso: 80.1,
        altura: 1.7,
        plano: true
    },
]

const output = []

pessoas.forEach((pessoa) => {
    const imc = (pessoa.peso / (pessoa.altura ^ 2)).toFixed(2)
    const frase = `${pessoa.nome} tem idade ${pessoa.idade} e IMC ${imc}.`
    output.push(frase)
})

console.log(output)