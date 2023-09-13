function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1Input: string | null = prompt("First Number");
    const num2Input: string | null = prompt("Second Number");

    // Converte as entradas para números (ou NaN se não forem números)
    const num1: number = parseFloat(num1Input || "0");
    const num2: number = parseFloat(num2Input || "0");

    // Verifica se as conversões resultaram em números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
        let result: number = sum(num1, num2);
        result += multiply(1, 2);
        showResult(result);
    } else {
        console.log("Entradas inválidas. Certifique-se de inserir números válidos.");
    }
})();
