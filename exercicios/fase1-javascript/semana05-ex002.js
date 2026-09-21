'use strict'

const notas = [8, 7, 9, 10];

const maiorNota = Math.max(...notas);
const menorNota = Math.min(...notas);
const media = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;

console.log(`A maior nota é: ${maiorNota}`);
console.log(`A menor nota é: ${menorNota}`);
console.log(`A média das notas é: ${media}`);