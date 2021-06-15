const makeBoolean = () => {
    return Math.random() > 0.5 ? true : false
}

const saySomething = () => {
    if (makeBoolean()) console.log("É verdade este bilete.")
    else console.log("Não é verdade, não.")
}

const learn = () => {
    const isJavascript = makeBoolean() ? "javascript" : "not javascript"
    if (isJavascript === "javascript") console.log("Tá escrito javascript ali. Estou aprendendo.")
    else console.log("Não tá escrito javascript ali. Aprenderei mais tarde.")
}

saySomething()
learn()