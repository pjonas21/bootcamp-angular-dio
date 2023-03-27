function verificarPgto(precoEtiqueta, formaPgto) {
    if (formaPgto === 1) {
        const valorPgto = aplicarDesconto(precoEtiqueta,10);
        console.log(`Valor a ser pago: R$${valorPgto.toFixed(2)}, com 10% de desconto.`)
    } else if (formaPgto === 2) {
        const valorPgto = aplicarDesconto(precoEtiqueta, 15);
        console.log(`Valor a ser pago: R$${valorPgto.toFixed(2)}, com 15% de desconto.`)
    } else if (formaPgto === 3) {
        console.log(`Valor a ser pago: R$${precoEtiqueta.toFixed(2)}, em 2 vezes.`)
    } else if (formaPgto === 4) {
        const valorPgto = aplicarAcrescimo(precoEtiqueta, 10);
        console.log(`Valor a ser pago: R$${valorPgto.toFixed(2)}, parcelado acima de 2 vezes, com acrescimo de 10%.`)
    }
}

function aplicarDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100));
}

function aplicarAcrescimo(preco, taxa) {
    return preco + (preco * (taxa / 100));
}

// 1 - a vista debito 10% desconto
// 2 - a vista dinheiro pu pix 15% desc
// 3 - parcelado 2 vezes
// 4 - parcelado +2 vezes com juros 10%

let precoProd = 135.5;
let condicaoPagamento = 4;

verificarPgto(precoProd, condicaoPagamento);
