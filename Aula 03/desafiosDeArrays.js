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

console.log(produtos.pop(), "O método 'pop' remove e retorna o último item de uma matriz.")
console.log(produtos.join(" — "), "O método 'join' converte uma matriz em uma string, unindo todos os itens com um sinal que pode ser definido como argumento.")
console.log(produtos.push("Cafeteira"), "O método 'push' acrescenta um item ao final da matriz e retorna quantos itens existem nela.")
console.log(produtos.shift(), "O método 'shift' remove e retorna o primeiro item da matriz.")
console.log(produtos.unshift("Cadeira"), "O método 'unshift' acrescente um item no início da matriz e retorna quantos items existem nela.")
console.log(produtos)