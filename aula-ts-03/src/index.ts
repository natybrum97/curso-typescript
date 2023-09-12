function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

const multiplicação = sum(2, 2);
console.log(multiplicação);

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

const soma = sum(1, 2);
console.log(soma);

function isEven(num: number): boolean {
    return num % 2 === 0;
}

const resto = isEven(8);
console.log(resto);

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

const resultados = showResult(7);