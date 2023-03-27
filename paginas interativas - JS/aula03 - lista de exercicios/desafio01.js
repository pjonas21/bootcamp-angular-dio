let nota1 = 8;
let nota2 = 7;
let nota3 = 7;

const media = (nota1+nota2+nota3) / 3;

if (media < 5) {
    console.log(`Media: ${media.toFixed(2)}. O aluno esta reprovado.`)
} else if (media >= 5 && media <= 7) {
    console.log(`Media: ${media.toFixed(2)}. O aluno esta de recuperacao.`)
} else {
    console.log(`Media: ${media.toFixed(2)}. O aluno passou de semestre.`)
}