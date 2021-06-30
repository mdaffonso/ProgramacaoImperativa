const solve = (...args) => {
    if(args.length === 0) {
        console.error("Você deve inserir números como argumentos para esta função.")
        return
    }

    const numbers = args.filter(value => typeof value === "number")
    const notNumbers = args.filter(value => typeof value !== "number")

    const solveOperation = (op) => {
        let totalVal = numbers[0]
        for(let i = 1; i < numbers.length; i++) {
            switch(op) {
                case "—":
                case "-":
                case "minus":
                case "subtract":
                case "menos":
                case "subtrai":
                case "subtração":
                    totalVal -= numbers[i]
                    break

                case "*":
                case "x":
                case "X":
                case "×":
                case "times":
                case "multiply":
                case "vezes":
                case "multiplica":
                case "multiplicação":
                    totalVal *= numbers[i]
                    break

                case "/":
                case "÷":
                case "divided":
                case "division":
                case "dividido":
                case "divide":
                case "divisão":
                    totalVal /= numbers[i]
                    break

                case "+":
                case "plus":
                case "add":
                case "mais":
                case "adiciona":
                case "soma":
                default:
                    totalVal += numbers[i]
                    break
            }
        }
        return totalVal
    }

    return {
        numAdd: solveOperation("+"),
        numSubtract: solveOperation("-"),
        numMultiply: solveOperation("*"),
        numDivide: solveOperation("/"),
        numbers,
        notNumbers
    }
}

const arithmetic = solve(3, 5, 10, 123, 290)
console.log(arithmetic)