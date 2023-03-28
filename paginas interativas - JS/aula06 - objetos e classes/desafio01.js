
class Carro {
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }

    //metodo dentro da classe para calcular o valor gasto em uma viagem
    calcularGasto(precoComb, distancia) {
        const valorGasto = (distancia / this.consumoMedio) * precoComb;
        console.log(`Metodo interno da classe. O carro de marca ${this.marca} gastarah R$${valorGasto.toFixed(2)} de combustivel para umma viagem de ${distancia} km.`)
    }
}

// funcao externa para calcular o valor gasto em combustivel em uma viagem
function calcularGasto(carro, precoComb, distancia) {
    const valorGasto = (distancia / carro.consumoMedio) * precoComb;
    console.log(`Funcao externa. O carro de marca ${carro.marca} gastarah R$${valorGasto.toFixed(2)} de combustivel para umma viagem de ${distancia} km.`)
}

const fox = new Carro('vw', 'brana', 13.5);

calcularGasto(fox, 6.19, 100);

fox.calcularGasto(5.85, 80);