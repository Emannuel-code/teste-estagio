// Sequências
let sequencias = [
    [1, 3, 5, 7], // a
    [2, 4, 8, 16, 32, 64], // b
    [0, 1, 4, 9, 16, 25, 36], // c
    [4, 16, 36, 64], // d
    [1, 1, 2, 3, 5, 8], // e
    [2, 10, 12, 16, 17, 18, 19] // f
];

function proximoElemento(sequencia) {
    let ultimoElemento = sequencia[sequencia.length - 1];
    let penultimoElemento = sequencia[sequencia.length - 2];
    
    if (sequencia.length === 1) {
        return ultimoElemento + 2; 
    } else if (sequencia.length === 2) {
        return ultimoElemento * 2; 
    } else if (sequencia.length === 3) {
        return penultimoElemento * 2; 
    } else if (sequencia.length % 2 === 0) {
        return ultimoElemento + sequencia.length; 
    } else {
        return ultimoElemento + (penultimoElemento * 2); 
    }
}

sequencias.forEach((sequencia, index) => {
    let proximo = proximoElemento(sequencia);
    console.log(`Próximo elemento da sequência ${String.fromCharCode(97 + index)}: ${proximo}`);
});
