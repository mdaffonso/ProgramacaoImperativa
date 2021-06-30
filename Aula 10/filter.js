const getResult = (...args) => {
  const results = [{
      condition: "verão",
      result: "toma uma água de coco, bicho!"
    },

    {
      condition: "inverno",
      result: "toma chá pra te esquentar!"
    },

    {
      condition: "outono",
      result: "toma qualquer coisa!"
    },

    {
      condition: "primavera",
      result: "toma um suco que tá bacana!"
    },

    {
      condition: "chuvoso",
      result: "leva um guarda-chuvaaaaaa"
    },

    {
      condition: "úmido",
      result: "seca as paredes!"
    }
  ]

  args.forEach(argument => {
    console.log(results.filter(c => c.condition === argument.toLowerCase()).map(c => c.result)[0] || `${argument} não vale nada, carinha`)
  })
}

getResult("inverno", "chuvoso")