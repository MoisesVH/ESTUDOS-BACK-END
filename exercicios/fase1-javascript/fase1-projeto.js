'use strict'

function cadastrarUsuario(nome, telefone, email, endereco, experiencias, formacoes, habilidades) {
    if (!validarNome(nome) || !validarEmail(email) || !validarTelefone(telefone)) {
        console.log('Erro, cadastro não realizado.');
        return
    };

    let curriculo = {
        nome: nome,
        telefone: telefone,
        email: email,
        endereco: endereco,
        experiencias: [...experiencias],
        formacoes: [...formacoes],
        habilidades: [...habilidades]
    };

    console.log('Cadastro realizado com sucesso!');
    return curriculo;
};

function validarNome(nome) {
    if (!nome) {
        console.log('Nome não informado, por favor, preencha o campo nome.');
        return false;
    } else {
        return true;
    };
};

function validarEmail(email) {
    if (email.indexOf('@') === -1 || !email) {
        console.log("Email inválido, por favor, preencha o campo email corretamente."); 
        return false;
    } else {
        return true;
    };
};

function validarTelefone(telefone) {
    if (telefone.length < 10 || telefone.length > 11 || !telefone) {
        console.log("Telefone inválido, por favor, preencha o campo telefone corretamente.");
        return false;
    } else {
        return true;
    };
};

function adicionarExperiencia(curriculo, experiencia) {
    curriculo.experiencias.push(experiencia);
};
function adicionarFormacao(curriculo, formacao) {
    curriculo.formacoes.push(formacao);
};
function adicionarHabilidade(curriculo, habilidade) {
    curriculo.habilidades.push(habilidade);
};

function mostrarCurriculo(curriculo) {
    console.log(`-----------------------------------`);
    console.log(`             Currículo             `);
    console.log(`-----------------------------------`);
    console.log(`Nome: ${curriculo.nome}`);
    console.log(`Telefone: ${curriculo.telefone}`);
    console.log(`Email: ${curriculo.email}`);
    console.log(`Endereço: ${curriculo.endereco}`);
    console.log('');
    console.log('Experiências:');
    for (let exp of curriculo.experiencias) {
        console.log(` - ${exp}`);
    };
    console.log('');
    console.log('Formações:');
    for (let form of curriculo.formacoes) {
        console.log(` - ${form}`);
    };
    console.log('');
    console.log('Habilidades:');
    for (let hab of curriculo.habilidades) {
        console.log(` - ${hab}`);
    };
};

let curriculo01 = cadastrarUsuario('Moisés Viana Honorato', '7998781990', 'moisesbr2005@gmail.com', 'Rua Getúlio Vargas 383, Pov. Brejão dos Negros, Brejo Grande/SE, 49995-000', ['Atendimento ao Cliente'], ['Ensino superior completo'], ['JavaScript', 'Node.js']);

adicionarExperiencia(curriculo01, 'Desenvolvedor Back-End');
adicionarFormacao(curriculo01, 'CST Análise e Desenvolvimento de Sistemas');
adicionarHabilidade(curriculo01, 'MongoDB');

mostrarCurriculo(curriculo01);