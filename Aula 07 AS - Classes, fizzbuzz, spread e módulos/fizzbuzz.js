const fizzbuzz = (a, b) => {
    for(let i=1;i<=100;i++){
        console.log([['Fizz'][i%a],['Buzz'][i%b]].join('')||i)
    }
}

fizzbuzz(3, 5)