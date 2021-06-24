class Aluno {
  constructor (nome, matricula, notas) {
    if (!Array.isArray(notas)) {
      return console.log(`As notas fornecidas devem ser em formato de array de números.`)
    }

    this.nome = nome
    this.matricula = matricula
    this.notas = notas.filter(v => typeof v === "number")
    this.media = this.notas.reduce((acc, curr) => acc+curr, 0) / this.notas.length
    this.aprovado = this.media >= 7 ? true : false
  }

  addMark(value) {
    if(typeof value !== "number") {
      return console.log("A nota inserida deve ser um número.")
    }
    return this.notas.push(value)
  }

  printReport() {
    return console.log(`O aluno ${this.nome} obteve média ${this.media} e ${this.aprovado ? `está aprovado!` : `está reprovado. :(`}`)
  }
}

const matheus = new Aluno("Matheus", 1595135, [8, 7, 10, 9.5, 7.7, 8.1])
const felipe = new Aluno("Felipe", 5159635, [5, 8, 9, 7, 6, 7])
const adryana = new Aluno("Adryana", 8483698, [3, 6, 7, 8, 4, 7])

matheus.printReport()
felipe.printReport()
adryana.printReport()