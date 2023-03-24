// desafio era aprimorar o primeiro exercicio
// acrescentando as variaveis referentes ao tipo de combustivel
// para calcular de acordo com o tipo informado

let precoGasolina = 5.85;
let precoEtanol = 4.90;
const tipoCombustivel = 'etanol';
//const tipoCombustivel = 'etanol';

let consumoMedioGasolina = 14.5;
let consumoMedioEtanol = 11.5;

let distanciaViagem = 105;

if (tipoCombustivel === 'gasolina') {
    const litrosConsumo = distanciaViagem / consumoMedioGasolina;
    const valorAbastecimento = litrosConsumo * precoGasolina;
    console.log(`Com o veiculo abastecido com ${tipoCombustivel},`)
    console.log(`o motorista devera abastecer ${litrosConsumo.toFixed(2)} litros,`)
    console.log(`com o valor de $${valorAbastecimento.toFixed(2)}.`)
} else {
    const litrosConsumo = distanciaViagem / consumoMedioEtanol;
    const valorAbastecimento = litrosConsumo * precoEtanol;
    console.log(`Com o veiculo abastecido com ${tipoCombustivel},`)
    console.log(`o motorista devera abastecer ${litrosConsumo.toFixed(2)} litros,`)
    console.log(`com o valor de $${valorAbastecimento.toFixed(2)}.`)
}
