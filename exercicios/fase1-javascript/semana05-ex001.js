'use strict'

const habilidades = ['JavaScript', 'Node.js'];

habilidades.push('Express.js');
habilidades.push('MySQL');
habilidades.push('React');
habilidades.pop();

console.log('Habilidades:');
habilidades.forEach((habilidade) => console.log(` - ${habilidade}`));