function calularImc(peso, altura) {
    let quadradoAltura = Math.pow(altura,2);
    return peso / quadradoAltura;
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)}. Pessoa abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 25) {
        return `IMC: ${imc.toFixed(2)}. Pessoa com peso normal.`;
    } else if (imc >= 25 && imc < 30) {
        return `IMC: ${imc.toFixed(2)}. Pessoa acima do peso.`;
    } else if (imc >= 30 && imc < 40) {
        return `IMC: ${imc.toFixed(2)}. Pessoa obesa.`;
    } else if (imc >= 40) {
        return `IMC: ${imc.toFixed(2)}. Pessoa com obesidade grave.`;
    }
}

// funcao imediatamente invocada
// funcao anonima
(function() {
    const peso = 60;
    const altura = 1.8;
    const imc = calularImc(peso, altura);
    console.log(classificarImc(imc));
})();

//main();

