const tabuada = []

let numero = 3

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    tabuada.push(`${numero} x ${i} = ${resultado}`)
    resultado = 0
}

console.log(tabuada)
