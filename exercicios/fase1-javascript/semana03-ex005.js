'use strict'

let curriculo = {
    nome: 'João da Silva',
    idade: 30,
    profissao: 'Desenvolvedor',
    formacao: 'Bacharel em Ciência da Computação',
    habilidades: ['JavaScript', 'HTML', 'CSS', 'Node.js']
};

for (let chave in curriculo) {
    console.log(`${chave}: ${curriculo[chave]}`);
};