const somar = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0)
}

const subtrair = (...args) => {
  return args.reduce((accumulator, current) => accumulator - current, 0)
}

module.exports = {
  somar,
  subtrair
}