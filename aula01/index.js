// calcular o gasto medio de abastecimento em uma viagem

let precoCombustivel = 5.85;
let consumoMedio = 14.5;
let distanciaViagem = 105;

let litrosConsumo = distanciaViagem / consumoMedio;

let valorAbastecimento = litrosConsumo * precoCombustivel;

console.log(valorAbastecimento.toFixed(2));
