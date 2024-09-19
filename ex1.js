function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === 0 || num === 1) return true;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}

let num = parseInt(prompt("Informe um número:"));

if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}
