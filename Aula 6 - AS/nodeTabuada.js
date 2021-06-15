const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const tabuada = (limit = 10) => {
    if(!limit.match(/\d+/) || limit < 1) {
        return console.log ('O argumento fornecido deve ser um número positivo.')
    }

    limit = Math.floor(limit)

    const makeCard = (number, array, longestStringLength) => {
        const filtered = array
            .filter(value => value.startsWith(`${number} `))
            .map(value => {
                const spaces = new Array(longestStringLength - value.length).fill(' ').join('')
                return `# ${value}${spaces} #`
            })
        const cap = new Array(longestStringLength+4).fill('#').join('')
        const topCap = cap.replaceAt(1, ` ${number} `)

        console.log(topCap)
        console.log(filtered.join('\n'))
        console.log(cap)
        console.log('')
    }

    const strings = []
    const charactersBeforeEquals = `${limit}`.length*2+3
    for(i = 1; i <= limit; i++) {
        for(j = 1; j <= limit; j++) {
            const leftSideOfEquation = `${i} x ${j}`
            const spacesAdded = new Array(charactersBeforeEquals-leftSideOfEquation.length+1).fill(' ').join('')
            strings.push(`${leftSideOfEquation}${spacesAdded}= ${i*j}`)
        }
    }

    const longest = strings
        .map(value => value)
        .sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0].length;

    for(i = 1; i <= limit; i++) {
        makeCard(i, strings, longest)
    }
}

rl.question('Digite um número inteiro positivo: \n', (value) => {
    tabuada(value)
    rl.close()
})

rl.on('close', () => {
    process.exit(0)
})