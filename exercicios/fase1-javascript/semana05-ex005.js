'use strict'

const pessoas = [
    { nome: 'Ana', idade: 22 },
    { nome: 'João', idade: 30 },
    { nome: 'Carlos', idade: 17 }
];

console.log(pessoas.find((pessoa) => pessoa.nome == 'Carlos'));

console.log();
const pessoasMaiorais = pessoas.filter((pessoa) => pessoa.idade >= 18);
console.log('Pessoas maiores de idade:');
pessoasMaiorais.forEach((pessoa) => console.log(` - ${pessoa.nome}, ${pessoa.idade} anos`));
