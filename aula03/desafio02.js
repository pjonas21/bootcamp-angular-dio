let peso = 120;
let altura = 1.7;
let quadradoAltura = Math.pow(altura,2);

const imc = peso / quadradoAltura;

if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)}. Pessoa abaixo do peso.`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: ${imc.toFixed(2)}. Pessoa com peso normal.`)
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc.toFixed(2)}. Pessoa acima do peso.`)
} else if (imc >= 30 && imc < 40) {
    console.log(`IMC: ${imc.toFixed(2)}. Pessoa obesa.`)
} else if (imc >= 40) {
    console.log(`IMC: ${imc.toFixed(2)}. Pessoa com obesidade grave.`)
}