'use strict'

let curriculo = {
    nome: 'Moisés Viana Honorato',
    idade: 21,
    endereco: 'Rua das Flores, 123',
    telefone: '123456789',
    email: 'moises@example.com',
    profissao: 'Desenvolvedor Back-End',
    escolaridade: 'Ensino Superior',
    habilidades: ['JavaScript', 'Node.js', 'Banco de Dados'],
};

console.log(`-----------------------------------`);
console.log(`             Currículo             `);
console.log(`-----------------------------------`);
console.log(`Nome: ${curriculo.nome}`);
console.log(`Idade: ${curriculo.idade}`);
console.log('');
console.log(`Telefone: ${curriculo.telefone}`);
console.log(`Email: ${curriculo.email}`);
console.log(`Endereço: ${curriculo.endereco}`);
console.log('');
console.log(`Habilidades:
 - ${curriculo.habilidades[0]}
 - ${curriculo.habilidades[1]}
 - ${curriculo.habilidades[2]}`);
console.log('');
console.log(`Profissão: ${curriculo.profissao}`);
console.log(`Escolaridade: ${curriculo.escolaridade}`);