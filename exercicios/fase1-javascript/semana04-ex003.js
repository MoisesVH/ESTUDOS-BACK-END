'use strict'

const IMC = function(altura, peso) {
    return peso / altura ** 2
}

let resultado = IMC(1.70, 60)

console.log(resultado.toFixed(2));