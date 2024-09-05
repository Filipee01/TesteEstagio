function fibonacci(number) {
    let initialNumber = 0
    let secondNumber = 1

    if(number === initialNumber || number === secondNumber) {
        return true
    }

    let nextNumber
    while(true) {
        nextNumber = initialNumber + secondNumber

        if(nextNumber === number) {
            return true
        }else if(nextNumber > number) {
            return false
        }
        initialNumber = secondNumber
        secondNumber = nextNumber
    }


}

let number = 25;
if (fibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}

