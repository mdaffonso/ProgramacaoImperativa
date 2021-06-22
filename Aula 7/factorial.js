const iterativeFactorial = num => {
    if(num == 0) return 1
    let result = num
    for (let i = num-1; i >= 1; i--) {
        result *= i
    }
    return result
}

const recursiveFactorial = n => {
    if(n == 0) {
        return 1
    } else {
        return n * recursiveFactorial(n - 1);
    }
}

for(let i = 1; i <= 15000; i++){
    recursiveFactorial(i)
}