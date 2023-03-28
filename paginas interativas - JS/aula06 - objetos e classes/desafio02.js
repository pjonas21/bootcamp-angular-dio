class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura,2);
        //return `Meu nome eh ${this.nome} e meu IMC eh de ${imc.toFixed(2)}.`
    }

    classificarImc() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return `IMC: ${imc.toFixed(2)}. Estou abaixo do peso.`;
        } else if (imc >= 18.5 && imc < 25) {
            return `IMC: ${imc.toFixed(2)}. Estou com peso normal.`;
        } else if (imc >= 25 && imc < 30) {
            return `IMC: ${imc.toFixed(2)}. Estou acima do peso.`;
        } else if (imc >= 30 && imc < 40) {
            return `IMC: ${imc.toFixed(2)}. Estou obeso(a).`;
        } else {
            return `IMC: ${imc.toFixed(2)}. Estou com obesidade grave.`;
        }
    }
}

const pessoa1 = new Pessoa('Jose', 70, 1.75);

console.log(pessoa1.calcularImc());
console.log(pessoa1.classificarImc());