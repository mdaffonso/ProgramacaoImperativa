const podeSubir = (altura = 119, acompanhada = false) => {                  // altura = 119 e acompanhada = false são meios de atribuir valores padrão para os argumentos da função.
    if(typeof altura !== "number" || typeof acompanhada !== "boolean") {    // aqui testamos o tipo de dados dos argumentos. se altura não for "number" e se acompanhada não for "boolean", este bloco de código é executado.
        console.log("O argumento 'altura' deve ser um número, e o argumento 'acompanhada' deve ser booleano.")
        return                                                              // retorna para fora da função caso os tipos de dados estejam errados.
    }
    let permitido = "NÃO AUTORIZADO"                                                    // declaramos uma variável para servir como cláusulas.
    if(altura >= 140 && altura < 200) permitido = "AUTORIZADO"                          // analisamos se a altura é maior ou igual a 1,40 e menor que 2,00. caso positivo, alteramos a variável permitido para "AUTORIZADO".
    else if(altura < 140 && altura > 120) permitido = "AUTORIZADO COM ACOMPANHANTE"     // se a linha acima não for verdadeira, analisamos se a altura é menor que 1,40 e maior que 1,20. caso positivo, alteramos a variável permitido para "AUTORIZADO COM ACOMPANHANTE".

    let alturaEmMetros = (altura / 100).toFixed(2)      // transformamos a altura de centímetros a metros
    let estaAcompanhado = acompanhada === true          // declaramos uma variável com uma condicional ternária. esta variável vai servir para a mensagem final.
        ? "Você está acompanhado. Pode subir!"          // se acompanhada for true, a variável estaAcompanhado recebe o valor desta linha.
        : "Você não está acompanhado. Não pode subir."  // se acompanhada não for true, a variável estaAcompanhado recebe o valor desta linha.

    let mensagem = permitido === "AUTORIZADO"                                                                   // declaramos a variável mensagem e definimos um teste condicional ternário com base na variável permitido.
        ? `Sua altura é ${alturaEmMetros}m. Você está autorizado para subir na montanha russa! Yay!`            // caso permitido seja igual a "AUTORIZADO", mensagem recebe o valor desta linha. o valorEmMetros vai fazer parte da string.
        : permitido === "AUTORIZADO COM ACOMPANHANTE"                                                           // caso contrário, testamos se permitido tem o valor "AUTORIZADO COM ACOMPANHANTE".
        ? `Sua altura é ${alturaEmMetros}m. Você somente pode subir se estiver acompanhado. ${estaAcompanhado}` // caso permitido seja "AUTORIZADO COM ACOMPANHANTE", mensagem recebe o valor desta linha. a variável estaAcompanhado vai definir o valor permissivo deste caso.
        : `Sua altura é ${alturaEmMetros}m. Infelizmente, você não pode subir. :(`                              // finalmente, caso contrário, mensagem recebe o valor desta linha.
    console.log(mensagem)   // a função imprime no console a variável mensagem.
}

podeSubir("show")
podeSubir(150, "batata")
podeSubir(210)
podeSubir(141)
podeSubir(139, false)
podeSubir(125, true)
podeSubir(119, true)