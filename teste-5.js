function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// String a ser invertida (pode ser alterada conforme necessário)
let minhaString = "Olá, mundo!";

// Inverter a string
let stringInvertida = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);