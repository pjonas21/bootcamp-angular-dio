// objeto literal
/* const pessoa = {
    // composto por uma colecao de chave e valor
    nome: 'Paulo Jonas',
    idade: 33,

    descrever: function() {
        // a palavra 'this' faz referencia a valores que estao no mesmo contexto
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}.`)
    }
}
const atributo = 'idade';
console.log(pessoa[atributo]); */

// classes e orientacao a objetos
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}.`)
    }
}

// sempre que instanciamos um objeto, ele passa pelo construtor para receber os valores
// podendo os valores virem do proprio construtor ou passados por parametros na instancia do objeto
/* const jonas = new Pessoa('Paulo Jonas', 33);

console.log(jonas);

const vanessa = new Pessoa('Vanessa', 33);

console.log(vanessa);

jonas.descrever();
vanessa.descrever(); */

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} eh mais velho(a) que ${p2.nome}.`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} eh mais velho(a) que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}.`)
    }
}

const jonas = new Pessoa('Paulo', 34);
const vanessa = new Pessoa('Vanessa', 33);

compararPessoas(jonas,vanessa);