const divideBySum = (arg) => {
  if(!Array.isArray(arg)) {
    return "O argumento fornecido deve ser um array."
  }

  const validValues = arg.filter(val => typeof val === "number")
  const sumOfValues = validValues.reduce((acc, curr) => acc + curr, 0)
  return validValues.map(val => val/sumOfValues)
}

const filterWordsByLength = (arg) => {
  if(!Array.isArray(arg)) {
    return "O argumento fornecido deve ser um array."
  }

  const numberFromArg = arg.find(val => typeof val === "number")

  if(!numberFromArg) {
    return "Deve haver um número no array fornecido."
  }

  return arg.filter(val => typeof val === "string" && val.length > numberFromArg)
}

const sort = (arg, property) => {
  if(!Array.isArray(arg)) {
    return "O argumento fornecido deve ser um array."
  }

  const filtered = arg.filter(val => val[property])
  filtered.sort((a, b) => a[property] > b[property] ? 1 : -1)
  return filtered
}



const alunos = [
  { name: "José", grade: 8 },
  { name: "Maria", grade: 9 },
  { name: "Ana", grade: 10 },
  { nome: "Kauê", grade: 2 }
]

console.log(sort(alunos, "grade"))