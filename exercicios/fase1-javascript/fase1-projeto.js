'use strict'

let curriculo = {
    nome: 'Moisés Viana Honorato',
    idade: 21,
    endereco: 'Rua das Flores, 123',
    telefone: '1293456789',
    email: 'moises@example.com',
    experiencia: ['Atendimento ao Cliente', 'Desenvolvedor Back-End'],
    formacao: ['Ensino Superior', 'CSP Analise e Desenvolvimento de Sistemas'],
    habilidades: ['JavaScript', 'Node.js', 'Banco de Dados'],
};
let validação = true;
if (!curriculo.nome) {
    console.log("Nome não informado, por favor, preencha o campo nome.");
    validação = false;
};
if (curriculo.idade <= 0 || !curriculo.idade) {
    console.log("Idade inválida, por favor, preencha o campo idade corretamente.");
    validação = false;
};
if (curriculo.email.indexOf('@') === -1 || !curriculo.email) {
    console.log("Email inválido, por favor, preencha o campo email corretamente.");
    validação = false;
};
if (curriculo.telefone.length < 10 || curriculo.telefone.length > 11 || !curriculo.telefone) {
    console.log("Telefone inválido, por favor, preencha o campo telefone corretamente.");
    validação = false;
};

if (validação) {
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
    console.log('Experiências:');
    for (let exp of curriculo.experiencia) {
        console.log(` - ${exp}`);
    };
    console.log('');
    console.log('Formações:');
    for (let form of curriculo.formacao) {
        console.log(` - ${form}`);
    };
    console.log('');
    console.log('Habilidades:');
    for (let hab of curriculo.habilidades) {
        console.log(` - ${hab}`);
    };
};