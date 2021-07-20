const acaoCarro = (...args) => {
    args.forEach(arg => {
        if(arg instanceof Function === true) {
            return arg()
        }
        console.log("Os argumentos fornecidos devem ser funções.")
    })
}

const andar = () => {
    console.log("O carro está andando.")
}

const parar = () => {
    console.log("O carro parou.")
}

acaoCarro(andar, parar, () => {
    console.log("O carro existe.")
})