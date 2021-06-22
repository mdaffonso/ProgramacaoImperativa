function recursiveCountdown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        recursiveCountdown(nextNumber);
    }
}

function iterativeCountdown(fromNumber) {
    for(let i = fromNumber; i > 0; i--) {
        console.log(i)
    }
}

let num = 10000

console.log('Loop:')
iterativeCountdown(num)

console.log('\n\nRecursão:')
recursiveCountdown(num)