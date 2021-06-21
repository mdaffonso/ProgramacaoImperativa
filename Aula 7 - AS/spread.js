const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17
]

const numbers = [
  1, 4, 6, 8, 9, 10, 12, 14, 15, 16, ...primeNumbers
]

const getSmallest = (...args) => Math.min(...args)

console.log(getSmallest(...numbers))