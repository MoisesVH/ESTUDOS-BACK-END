/*
 *  Tipos e Valores
 *
 *      Em Javascript existem dois tipos de valores, os tipos primitivos e tipos objetos 
 *      Valores dos tipos primitivos:
 *          - strings (todo texto dentro de aspas simples (''), aspas duplas ("") ou crazes (``))
 *          - number (valores númericos, inteiro ou real)
 *          - boolean (Valores lógicos, true ou false)
 *          - null (Valor especial, nulo)
 *          - underfined (valor especial, indefinido)
 *      
 *      Valores do tipo objeto:
 *          - Qualquer valor que não seja um dos informados acima é um objeto
 */ 

//exemplos utilizando o metodo typeof para consultas os tipos valores:

console.log(typeof('Olá Mundo!')); // string

console.log(typeof('34')); // tudo dentro de aspas ou crazes é uma string

console.log(typeof(34)); // valor númerico

console.log(typeof(new Number(34))); // criação de um objeto Number

console.log(typeof([0.8, 3, 40])); // Array

console.log(typeof({})); // Objeto

console.log(typeof(true)); //Valor booleano

console.log(typeof('false')); // tudo dentro de aspas ou crazes é uma string