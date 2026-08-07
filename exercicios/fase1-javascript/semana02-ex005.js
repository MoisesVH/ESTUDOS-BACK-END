'use strict'

let usuario = 'user';
let senha = '5678';

switch (usuario) {
    case 'admin':
        if (senha === '1234') {
            console.log('Acesso permitido');
            break;
        } else {
            console.log('Senha incorreta!');
            break;
        };
    case 'user':
        if (senha === '5678') {
            console.log('Acesso permitido');
            break;
        } else {
            console.log('Senha incorreta!');
            break;
        };
    default:
        console.log('Usuário não encontrado!');
        break;
};