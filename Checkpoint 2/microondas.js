const useMicrowave = (dish = null, time = null) => {

  if (typeof dish !== "string") {
    return "O primeiro argumento deve ser uma string."
  }

  const setups = [{
      food: "pipoca",
      time: 10,
      emoji: "🍿"
    },
    {
      food: "macarrão",
      time: 8,
      emoji: "🍝"
    },
    {
      food: "carne",
      time: 15,
      emoji: "🍖"
    },
    {
      food: "feijão",
      time: 12,
      emoji: "🧆"
    },
    {
      food: "brigadeiro",
      time: 8,
      emoji: "🎂"
    }
  ]

  const findSetup = setups.map(setup => {
    return {
      ...setup,
      limitToBurn: setup.time * 2,
      limitToExplode: setup.time * 3
    }
  }).find(param => param.food === dish.toLowerCase())

  switch (true) {
    case !findSetup:
      return `Este microondas não tem configurações predefinidas para ${dish}. Sentimos muito pela inconveniência. 🙁`
    case time >= findSetup.time && time <= findSetup.limitToBurn:
    case time === null:
      return `Seu prato de ${findSetup.food} está pronto! ${findSetup.emoji}\nBom apetite! 😃`
    case time < findSetup.time:
      return `Tempo insuficiente. Para este prato, o tempo mínimo é ${findSetup.time}.`
    case time > findSetup.limitToExplode:
      return `Kabumm! 💥`
    case time > findSetup.limitToBurn:
      return `Você deixou tempo demais, sua comida queimou. 🔥`
    default:
      return `O tempo fornecido deve ser um número.`
  }
}

console.log(useMicrowave("macarrão", 8))