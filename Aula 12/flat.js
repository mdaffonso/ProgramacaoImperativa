const arr = [1, 2, 3, 4]
const arr2 = [1, 2, [3, 4]]
const arr3 = [1, 2, [[3, 4], [5, 6]]]
const arr4 = [1, 2, [[[3, 4], 5, [6, 7]]]]

console.log('flat1')
console.log(arr.flat())
console.log(arr2.flat())
console.log(arr3.flat())
console.log(arr4.flat())
console.log('')

console.log('flat2')
console.log(arr.flat(2))
console.log(arr2.flat(2))
console.log(arr3.flat(2))
console.log(arr4.flat(2))
console.log('')

console.log('flat3')
console.log(arr.flat(3))
console.log(arr2.flat(3))
console.log(arr3.flat(3))
console.log(arr4.flat(3))
console.log('')

console.log('originais')
console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(arr4)