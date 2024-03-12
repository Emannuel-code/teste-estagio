function descobrirInterruptores() {
    let lampada1 = false;
    let lampada2 = false;
    let lampada3 = false;

    // Ligar o primeiro interruptor
    lampada1 = !lampada1;

    // Desligar o primeiro interruptor e ligar o segundo interruptor
    lampada1 = !lampada1;
    lampada2 = !lampada2;

    // Agora podemos determinar qual interruptor controla cada lâmpada
    if (lampada1) {
        console.log("O primeiro interruptor controla a primeira lâmpada.");
        console.log("O segundo interruptor controla a terceira lâmpada.");
        console.log("O terceiro interruptor controla a segunda lâmpada.");
    } else {
        console.log("O primeiro interruptor controla a segunda lâmpada.");
        console.log("O segundo interruptor controla a primeira lâmpada.");
        console.log("O terceiro interruptor controla a terceira lâmpada.");
    }
}

descobrirInterruptores();