'use strict'

let peso = 60;
let altura = 1.70;
const imc = peso / (altura ** 2);

console.log(`O IMC para uma pessoa com peso de ${peso}kg e altura de ${altura}m é: ${imc.toFixed(2)}`);