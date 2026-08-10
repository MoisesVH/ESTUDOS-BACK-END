'use strict'

function mostrarMaior(n1, n2) {
    if (n1 > n2) {
        console.log(n1);
    } else if (n1 == n2){
        console.log('Os números são iguais');
    } else {
        console.log(n2);
    };
};

mostrarMaior(10, 5);