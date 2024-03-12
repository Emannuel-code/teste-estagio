function fibonacciSequence(n) {
    let sequencia = [0, 1];
    
    while (sequencia[sequencia.length - 1] <= n) {
        let proximoNumero = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        sequencia.push(proximoNumero);
    }
    
    return sequencia;
}

function isInFibonacciSequence(number, fibonacciSequence) {
    return fibonacciSequence.includes(number);
}

let numero = parseInt(prompt("Digite um número para verificar se está na sequência de Fibonacci: "));

let sequenciaFibonacci = fibonacciSequence(numero);


if (isInFibonacciSequence(numero, sequenciaFibonacci)) {
    console.log(`O número ${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`número ${numero} não está na sequência de Fibonacci`);
}