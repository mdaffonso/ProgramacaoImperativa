/*
1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores.
*/

class Pessoa {
    constructor(nome = "João", altura = 175, peso = 80) {
        this.nome = nome
        this.altura = altura
        this.peso = peso
        this.imc = (this.peso / ((this.altura/100) * (this.altura/100))).toFixed(2)
    }

    mostrarIMC() {
        console.log(`${this.nome} tem ${(this.altura/100).toFixed(2)}m de altura, pesa ${this.peso}kg, e tem IMC de ${this.imc}`)
    }
}
const matheus = new Pessoa("Matheus", 186, 88)
const brunna = new Pessoa("Brunna", 170, 67)
matheus.mostrarIMC()
brunna.mostrarIMC()

/*
2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

Soma;
Subtração;
Multiplicação;
Divisão.

As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.
*/

const arithmetics = (...args) => {
    console.log("")
    console.log("OPERAÇÕES ARITMÉTICAS")
    if(!args) {
        console.log("Você deve inserir números como argumentos para esta função.")
        return
    }

    const validNumbers = args.filter(value => typeof value === "number")
    const invalidInput = args.filter(value => typeof value !== "number")

    const operacao = (op) => {
        let totalVal = validNumbers[0]
        for(let i = 1; i < validNumbers.length; i++) {
            switch(op) {
                case "—":
                case "-":
                case "minus":
                case "subtract":
                case "menos":
                case "subtrai":
                case "subtração":
                    totalVal -= validNumbers[i]
                    break

                case "*":
                case "x":
                case "X":
                case "×":
                case "times":
                case "multiply":
                case "vezes":
                case "multiplica":
                case "multiplicação":
                    totalVal *= validNumbers[i]
                    break

                case "/":
                case "÷":
                case "divided":
                case "division":
                case "dividido":
                case "divide":
                case "divisão":
                    totalVal /= validNumbers[i]
                    break

                case "+":
                case "plus":
                case "add":
                case "mais":
                case "adiciona":
                case "soma":
                default:
                    totalVal += validNumbers[i]
                    break
            }
        }
        return totalVal
    }

    console.log('')
    console.log(`Você inseriu os números ${validNumbers.join(', ')}.`)
    console.log(`O resultado da soma de todos os números inseridos é: ${operacao("+")}`)
    console.log(`O resultado da subtração de todos os números inseridos é: ${operacao("-")}`)
    console.log(`O resultado da multiplicação de todos os números inseridos é: ${operacao("*")}`)
    console.log(`O resultado da divisão de todos os números inseridos é: ${operacao("/")}`)
    console.log('')
    console.log(`Os valores "${invalidInput.join(', ')}" não foram utilizados no cômputo, pois não são números.`)
    console.log('')
}
arithmetics(1, 3, 5, 8, "batata", "José", { nome: "Matheus", idade: 33})

/*
3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.

4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.
*/

class Gols {
    constructor(nomeJogador, golsJogador, precoEmDolares) {
        this.nomeJogador = nomeJogador
        this.golsJogador = golsJogador
        this.precoEmDolares = precoEmDolares
        this.goalMessage = "GOL!!!!!"

        let lineLengths = [
            `Jogador: ${nomeJogador}`.length,
            `Total de gols: ${golsJogador}`.length,
            `Valor do jogador: ${this.precoEmDolares}`.length,
        ]

        this.maxLength = Math.max(...lineLengths)
        this.boxLids = Array(this.maxLength+6).fill("#", 0, this.maxLength+7).join('')
    }

    makeLine(text) {
        let extraSpaces = ''
        if(text.length < this.maxLength) {
            extraSpaces = Array(this.maxLength - text.length).fill(' ', 0, (this.maxLength - text.length)).join('')
        }
        return `## ${text}${extraSpaces} ##`
    }

    aumentarPreco(n) {
        const valorizacao = 1 + (n/100)
        this.precoEmDolares *= valorizacao
        return this.precoEmDolares
    }

    fazerGol(n) {
        if(!n) n = 1

        for(let i = 0; i < n; i++) {
            this.golsJogador++
            this.precoEmDolares += 10000
            console.log(this.goalMessage)
        }
    }

    mostrar() {
        console.log('')
        console.log(this.boxLids)
        console.log(this.makeLine(`Jogador: ${this.nomeJogador}`))
        console.log(this.makeLine(`Total de gols: ${this.golsJogador}`))
        console.log(this.makeLine(`Valor do jogador: ${this.precoEmDolares}`))
        console.log(this.boxLids)
        console.log('')
    }
}

const neymar = new Gols("Neymar", 10, 15000)
neymar.fazerGol()
neymar.mostrar()
neymar.fazerGol()
neymar.mostrar()

const hatTrick = (nome) => {
    console.log('')
    console.log(`O jogador ${nome} entrou em campo.`)
    const novoJogo = new Gols(nome, 0, 10000)
    novoJogo.fazerGol(3)
    novoJogo.aumentarPreco(10)
    novoJogo.mostrar()
    console.log('')
}

hatTrick("José Maria Josias das Couves Dutra Xablau")