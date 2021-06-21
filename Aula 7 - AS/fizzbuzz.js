const fizzbuzz = (a, b) => {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    for(let i=min;i<=max;i++){
        console.log([['fizz'][i%3],['buzz'][i%5]].join('')||i)
    }
}

fizzbuzz(13, 29)