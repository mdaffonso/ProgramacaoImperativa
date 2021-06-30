// Aula 3 - 1/6/2021
// Funções

function minhaFuncao() {
    console.log("Não fui eu, foram eles. Foi alguém!")
}

const sum = (...args) => {
    console.log(args.reduce((acc, curr) => acc+curr, 0))
}

(() => {
    console.log("Lambda")
})()

minhaFuncao()
sum(1, 4, 6)