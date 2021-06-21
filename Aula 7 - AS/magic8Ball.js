const ask = question => {
    const replies = [
        "Certamente.",
        "Decididamente.",
        "Sem dúvidas.",
        "Sim, definitivamente.",
        "Pode acreditar que sim.",
        "Ah, entendo. Sim.",
        "Muito provavelmente.",
        "Parece bom.",
        "Sim.",
        "Os sinais indicam que sim.",
        "Resposta nebulosa. Tente novamente.",
        "Pergunte novamente mais tarde.",
        "Melhor não te dizer agora.",
        "Não consigo prever agora.",
        "Concentre-se e pergunte novamente.",
        "Não conte com isso.",
        "Minha resposta é não.",
        "Minhas fontes dizem que não.",
        "Não parece bom.",
        "Muito improvável.",
    ]

    return replies[Math.floor(Math.random()*replies.length-1)]
}

module.exports = ask