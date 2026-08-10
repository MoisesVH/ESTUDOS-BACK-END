'use strict'

function calcularMedia(notas) {
    let media = 0;
    let cont = 0;
    for (let nota of notas) {
        media += nota;
        cont++;
    };
    return media / cont; 
};

console.log(calcularMedia([10, 5, 7, 3]));