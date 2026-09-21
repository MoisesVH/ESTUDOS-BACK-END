'use strict'

const experiencias = [
    {
        empresa: "Empresa A",
        cargo: "Atendente",
        salario: 1500
    },
    {
        empresa: "Empresa B",
        cargo: "Assistente",
        salario: 2000
    },
    {
        empresa: "Empresa C",
        cargo: "Desenvolvedor",
        salario: 3500
    }
];

let totalSalario = experiencias.reduce((acumulador, exp) => {
    acumulador += exp.salario
    return acumulador
}, 0);
console.log(totalSalario);