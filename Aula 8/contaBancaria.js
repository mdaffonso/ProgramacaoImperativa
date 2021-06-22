class Conta {
  constructor(conta, saldo, titular){
    this.conta = conta
    this.saldo = saldo
    this.titular = titular
  }

  depositar(value) {
    this.saldo += value
    console.log(`Foram depositados R$ ${value} na conta de ${this.titular}. O saldo atual é R$ ${this.saldo}.`)
  }

  sacar(value) {
    if(this.saldo < value) {
      return console.log(`Você tentou sacar R$ ${value} da conta de ${this.titular}. Saldo em conta insuficiente.`)
    }
    this.saldo -= value
    console.log(`Foram sacados R$ ${value} da conta de ${this.titular}. O saldo atual é R$ ${this.saldo}`)
  }
}

const contaMatheus = new Conta(123123, 19283, "Matheus Dalmas Affonso")
contaMatheus.depositar(123123)
contaMatheus.sacar(23412)

const contaJoao = new Conta(123234, 519, "João")
contaJoao.sacar(600)
contaJoao.depositar(500)
contaJoao.sacar(600)