let numero = 3;

let soma = 0;

for(let i = 1; i <= numero; i++){
    //criar condicao da soma, exceto numeros diviseis por 3
    const div3 = i % 3 === 0
    if(!div3) {
        soma += i
    }
}

console.log(`Soma dos números de 1 a ${numero}, exceto os divisíveis por 3: ${soma}`)