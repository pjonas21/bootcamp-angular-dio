function escrevaNome(nome) {
    return `Meu nome eh ${nome}`;
}

function isMaiorIdade(nome, idade){
    if (idade >= 18) {
        console.log(escrevaNome(nome) + ` e sou Maior de idade`);
    } else {
        console.log(escrevaNome(nome) + ` e sou Menor de idade`);
    }
}


isMaiorIdade(`Paulo Jonas`, 21);




