const shuffle = input => {
    if (typeof input !== 'string' || !input instanceof String) {
        return "Você deve utilizar uma frase como argumento."
    }

    const shuffleWord = input => {
        let punctuation = ''
        const word = input.split('')
        if(word[word.length-1].match(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/)) {
            punctuation = word.pop()
        }

        for (let i = word.length-2; i > 1; i--) {
            let j = Math.floor(Math.random() * (word.length-3) + 1)
            if(j === i) continue
            let temp = word[i]
            word[i] = word[j]
            word[j] = temp
        }

        return word.join('') + punctuation
    }
    const words = input.split(' ')
    return words.map(word => shuffleWord(word)).join(' ')
}

console.log(shuffle("Digite aqui a frase que deseja embaralhar, por exemplo, hello world."))