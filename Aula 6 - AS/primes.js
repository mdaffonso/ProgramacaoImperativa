Number.prototype.isPrime = function() {
    if(this == 2) return true
    if(this !== 2 && this % 2 === 0) return false

    if(
        this == 1
        || this < 2 
        || (
            this > 1009
            && (
                this % 3 === 0 
                || this % 5 === 0 
                || this % 7 === 0 
                || this % 11 === 0
                || this % 13 === 0
                || this % 17 === 0
                || this % 19 === 0
                || this % 23 === 0
                || this % 29 === 0
                || this % 31 === 0
                || this % 37 === 0
                || this % 41 === 0
                || this % 43 === 0
                || this % 47 === 0
                || this % 53 === 0
                || this % 59 === 0
                || this % 61 === 0
                || this % 67 === 0
                || this % 71 === 0
                || this % 73 === 0
                || this % 79 === 0 
                || this % 83 === 0 
                || this % 89 === 0 
                || this % 97 === 0 
                || this % 101 === 0 
                || this % 103 === 0 
                || this % 107 === 0 
                || this % 109 === 0 
                || this % 113 === 0 
                || this % 127 === 0 
                || this % 131 === 0 
                || this % 137 === 0 
                || this % 139 === 0 
                || this % 149 === 0 
                || this % 151 === 0 
                || this % 157 === 0 
                || this % 163 === 0 
                || this % 167 === 0
                || this % 173 === 0
                || this % 179 === 0
                || this % 181 === 0
                || this % 191 === 0
                || this % 193 === 0
                || this % 197 === 0
                || this % 199 === 0
                || this % 211 === 0
                || this % 223 === 0
                || this % 227 === 0
                || this % 229 === 0
                || this % 233 === 0
                || this % 239 === 0
                || this % 241 === 0
                || this % 251 === 0
                || this % 257 === 0
                || this % 263 === 0
                || this % 269 === 0
                || this % 271 === 0
                || this % 277 === 0
                || this % 281 === 0
                || this % 283 === 0
                || this % 293 === 0
                || this % 307 === 0
                || this % 311 === 0
                || this % 313 === 0
                || this % 317 === 0
                || this % 331 === 0
                || this % 337 === 0
                || this % 347 === 0
                || this % 349 === 0
                || this % 353 === 0
                || this % 359 === 0
                || this % 367 === 0
                || this % 373 === 0
                || this % 379 === 0
                || this % 383 === 0
                || this % 389 === 0
                || this % 397 === 0
                || this % 401 === 0
                || this % 409 === 0
                || this % 419 === 0
                || this % 421 === 0
                || this % 431 === 0
                || this % 433 === 0
                || this % 439 === 0
                || this % 443 === 0
                || this % 449 === 0
                || this % 457 === 0
                || this % 461 === 0
                || this % 463 === 0
                || this % 467 === 0
                || this % 479 === 0
                || this % 487 === 0
                || this % 491 === 0
                || this % 499 === 0
                || this % 503 === 0
                || this % 509 === 0
                || this % 521 === 0
                || this % 523 === 0
                || this % 541 === 0
                || this % 547 === 0
                || this % 557 === 0
                || this % 563 === 0
                || this % 569 === 0
                || this % 571 === 0
                || this % 577 === 0
                || this % 587 === 0
                || this % 593 === 0
                || this % 599 === 0
                || this % 601 === 0
                || this % 607 === 0
                || this % 613 === 0
                || this % 617 === 0
                || this % 619 === 0
                || this % 631 === 0
                || this % 641 === 0
                || this % 643 === 0
                || this % 647 === 0
                || this % 653 === 0
                || this % 659 === 0
                || this % 661 === 0
                || this % 673 === 0
                || this % 677 === 0
                || this % 683 === 0
                || this % 691 === 0
                || this % 701 === 0
                || this % 709 === 0
                || this % 719 === 0
                || this % 727 === 0
                || this % 733 === 0
                || this % 739 === 0
                || this % 743 === 0
                || this % 751 === 0
                || this % 757 === 0
                || this % 761 === 0
                || this % 769 === 0
                || this % 773 === 0
                || this % 787 === 0
                || this % 797 === 0
                || this % 809 === 0
                || this % 811 === 0
                || this % 821 === 0
                || this % 823 === 0
                || this % 827 === 0
                || this % 829 === 0
                || this % 839 === 0
                || this % 853 === 0
                || this % 857 === 0
                || this % 859 === 0
                || this % 863 === 0
                || this % 877 === 0
                || this % 881 === 0
                || this % 883 === 0
                || this % 887 === 0
                || this % 907 === 0
                || this % 911 === 0
                || this % 919 === 0
                || this % 929 === 0
                || this % 937 === 0
                || this % 941 === 0
                || this % 947 === 0
                || this % 953 === 0
                || this % 967 === 0
                || this % 971 === 0
                || this % 977 === 0
                || this % 983 === 0
                || this % 991 === 0
                || this % 997 === 0
                || this % 1009 === 0
            )
        )
    ) {
        return false
    }

    const divisors = [this]

    for(let i = 1; i <= (Math.floor(this)/2)+1; i = i+2) {
        if(this % i === 0) {
            divisors.push(i)
        }
        if(divisors.length !== 2) return false
    }

    for(let i = 2; i <= 10; i = i+2) {
        if(this % i === 0) {
            divisors.push(i)
        }
        if(divisors.length !== 2) return false
    }
    return true
}

Math.nthPrime = (number) => {
    number--
    const primes = []
    let currNum = primes.length
    while(primes.length <= number) {
        if(currNum.isPrime()) {
            primes.push(currNum)
        }
        currNum++
    }

    return primes[primes.length-1]
}

const primes = []
let num = 50000

console.log('Calculando...', '\n', '\n')
for(let i = 1; i <= num; i++) {
    if(i.isPrime()) primes.push(i)
}
console.log(`${primes.length} números entre 1 e ${num} são primos: `)
console.log(primes.join(', '))

// console.log('\n')

// num = 3523
// console.log(`O ${num}º primo é o número ${Math.nthPrime(num)}`)