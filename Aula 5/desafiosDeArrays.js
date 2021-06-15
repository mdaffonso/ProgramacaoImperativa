const produtos = [
    "TV",
    "Laptop",
    "Microfone",
    "Smartphone",
    "Carro",
    "Mesa",
    "Geladeira",
    "Fogão",
    "Guitarra",
    "Pen drive"
]

console.log(`pop retorna: ${produtos.pop()}`, "\n", "O método 'pop' remove e retorna o último item de uma matriz.\n")
console.log(`join retorna: ${produtos.join(" — ")}`, "\n", "O método 'join' converte uma matriz em uma string, unindo todos os itens com um sinal que pode ser definido como argumento.\n")
console.log(`push retorna: ${produtos.push("Cafeteira")}`, "\n", "O método 'push' acrescenta um item ao final da matriz e retorna quantos itens existem nela.\n")
console.log(`shift retorna: ${produtos.shift()}`, "\n", "O método 'shift' remove e retorna o primeiro item da matriz.\n")
console.log(`unshift retorna: ${produtos.unshift("Cadeira")}`, "\n", "O método 'unshift' acrescente um item no início da matriz e retorna quantos items existem nela.\n")
console.log(`array final: ${produtos.join(', ')}`)