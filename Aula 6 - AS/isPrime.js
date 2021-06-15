Number.prototype.isPrime = function() {
    if(this < 2) return false
    const divisors = [this]
    for(let i = Math.floor(this)/2; i >= 1; i--) {
        if(this%i === 0) {
            divisors.push(i)
        }
    }
    if(divisors.length !== 2) return false
    return true
}

const primes = []
console.log("Números primos entre 1 e 10.000:")
for(let i = 1; i <= 10000; i++) {
    if(i.isPrime()) primes.push(i)
}
console.log(primes.join(', '))