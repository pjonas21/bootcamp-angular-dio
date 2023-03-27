// estruturas condicionais em JS

const numero = 98;

const isNumeroPar = (numero % 2) === 0;
// o comparador "==" compara valores sem considerar o tipo
// nao converte de forma implicita
// o ideal eh comparar utilizando os "==="
// armazenar condicionais complexas

// bloco condicional if (se)
// o ponto de exclamacao nega o valor da variavel
if (numero < 0 || numero > 100) {
    console.log(`O numero ${numero} eh invalido.`)
} else if (isNumeroPar) {
    console.log(`O numero ${numero} eh par.`)
} else {
    console.log(`O numero ${numero} eh impar.`)
}