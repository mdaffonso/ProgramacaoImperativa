// a funçao numberBaseConversion aceita 2 parâmetros:
//      num  ->  o número, em base decimal, que deverá ser convertido nas bases binária, octal e hexadecimal
//      unit ->  a definição do tamanho do output: 
//               por padrão é false, o que retorna toda a tabela de conversão, do 0 até o número escolhido; 
//               se for true, retorna somente o número escolhido
// o resultado é impresso no console em forma de colunas

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const numberBaseConversion = (num = 20, unit = false) => {

    if(typeof num !== 'number') {
        return console.log ('O argumento fornecido deve ser um número.')
    }

    if(unit) {
        const bases = [
            'bin',
            'oct',
            'dec',
            'hex'
        ]

        const lines = [
            `## ${num.toString(2)} ##`,
            `## ${num.toString(8)} ##`,
            `## ${num.toString(10)} ##`,
            `## ${num.toString(16).toUpperCase()} ##`,
        ]

        const bottomCaps = lines.map(value => new Array(value.length).fill('#').join(''))
        const topCaps = bottomCaps.map((value, index) => bottomCaps[index].replaceAt(2, ` ${bases[index]} `))

        console.log(bottomCaps.join('    '))
        console.log(topCaps.join('    '))
        console.log(lines.join('    '))
        console.log(bottomCaps.join('    '))
        return
    }

    let spaces
    const spaceBetween = '    '
    const baseBin = []
    const baseOct = []
    const baseDec = []
    const baseHex = []
    const largest = []
    const bottomCaps = []
    const lineValues = []
    const topCaps = [
        'bin',
        'oct',
        'dec',
        'hex'
    ]

    for(let i = 0; i <= num; i++) {
        baseBin.push(i.toString(2))
        baseOct.push(i.toString(8))
        baseDec.push(i.toString(10))
        baseHex.push(i.toString(16).toUpperCase())
    }

    const bases = [
        baseBin,
        baseOct,
        baseDec,
        baseHex
    ]

    bases.forEach((base, index) => {
        const largestLength = base[base.length-1].length+6
        const pushedLength = largestLength < 9 ? 9 : largestLength
        largest.push(pushedLength)
        bottomCaps.push(new Array(pushedLength).fill('#').join(''))
        topCaps[index] = bottomCaps[index].replaceAt(2, ` ${topCaps[index]} `)
    })

    for(let i = 0; i <= num; i++) {
        lineValues[i] = new Array(bases.length).fill(' ')
        lineValues[i].forEach((value, index) => {
            spaces = new Array(largest[index]-bases[index][i].length-6).fill(' ').join('')
            lineValues[i][index] = bottomCaps[index].replaceAt(2, ` ${spaces}${bases[index][i]} `)
        })
        lineValues[i] = lineValues[i].join(spaceBetween)
    }

    console.log(bottomCaps.join(spaceBetween))
    console.log(topCaps.join(spaceBetween))
    console.log(lineValues.join('\n'))
    console.log(bottomCaps.join(spaceBetween))

}

numberBaseConversion(250000, true)