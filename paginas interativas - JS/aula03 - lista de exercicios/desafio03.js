let precoProd = 135.5;
let condicaoPagamento = 3;

// 1 - a vista debito 10% desconto
// 2 - a vista dinheiro pu pix 15% desc
// 3 - parcelado 2 vezes
// 4 - parcelado +2 vezes com juros 10%

if (condicaoPagamento === 1) {
    const valorPgto = precoProd - (precoProd * 0.1)
    console.log(`Valor a ser pago: R$${valorPgto.toFixed(2)}, com 10% de desconto.`)
} else if (condicaoPagamento === 2) {
    const valorPgto = precoProd - (precoProd * 0.15)
    console.log(`Valor a ser pago: R$${valorPgto.toFixed(2)}, com 15% de desconto.`)
} else if (condicaoPagamento === 3) {
    console.log(`Valor a ser pago: R$${precoProd.toFixed(2)}, em 2 vezes.`)
} else if (condicaoPagamento === 4) {
    const valorPgto = precoProd * 1.1;
    console.log(`Valor a ser pago: R$${valorPgto.toFixed(2)}, em 3 ou mais vezes.`)
}
