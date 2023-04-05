/* const nome = 'Paulo jonas'

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
} */
const notas = [];

notas.push(5)
notas.push(7)
notas.push(7)
notas.push(8)
notas.push(8)

let somaNotas = 0
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

const media = somaNotas / notas.length

console.log(`A media do aluno foi de ${media}`)
