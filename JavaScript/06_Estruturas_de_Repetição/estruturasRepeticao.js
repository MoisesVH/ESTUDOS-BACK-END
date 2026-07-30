/*
    Estruturas de repetição
    - while
    - do/while
    - for
    - for/in
    - for/of
*/


/* 
    while

    Sintaxe:

        wilhe (Expessão) {instruções}; as intruções de wilhe serão sempre execultadas entando a expressão for verdadeira.
    
    Importante: toda instrução loop precisa ter sua variável contadora que deve ser incrementada a cada interação para que não haja um loop infinito
*/ 
console.log('Instrução while');
let contador = 0;
while (contador <= 10) {                    // Aqui está sendo testado se essa é a ultima interação do loop, para que o digito final tenha uma exibição diferente dos demais, com um ponto final ao inves de virgula.

    if (contador == 10) { 
        console.log(contador + '.\n');      // break encerra a interação do loop no momento que for chamado.
        break;                                          
    }

    console.log(contador + ', ');

    contador++
}


/* 
    do/while

    Sintaxe:

        do {
            instruções
        } wilhe (Expessão); as intruções de do/wilhe serão sempre executadas pelo menos uma vez mesmo se o resultado da expressão for falsa, e se essa expressão for verdadeira o laço se repetirá.
    
    Importante: toda instrução de loop precisa ter sua variável contadora que deve ser incrementada a cada interação para que não haja um loop infinito
*/ 

console.log('Instrução do/while');
let contador2 = 0;
do {
    
    if (contador2 == 10) {                  // Aqui está sendo testado se essa é a ultima interação do loop, para que o digito final tenha uma exibição diferente dos demais, com um ponto final ao inves de virgula
        console.log(contador2 + '.\n');
        break;
    }

    console.log(contador2 + ', ');

    contador2++
} while (contador2 <= 10);


/* 
    for

    Sintaxe:

        for (declaração; expressão; incremento) {instruções}; O loop for declara e incrementa sua variavel contadora dentro do próprio corpo, você pode omitir uma desas etapas mas nunca deve omitir o ponto e virgula que as separam
    
    Importante: toda instrução de loop precisa ter sua variável contadora que deve ser incrementada a cada interação para que não haja um loop infinito
*/ 

console.log('Instrução for');
for(contador3 = 0; contador3 <= 10; contador3++) {
    
    if (contador3 == 10) {                  // Aqui está sendo testado se essa é a ultima interação do loop, para que o digito final tenha uma exibição diferente dos demais, com um ponto final ao inves de virgula
        console.log(contador3 + '.\n');
        break;
    }

    console.log(contador3 + ', ');
};


// for/in e for/of são utilizados para percorrer propriedades de objetos e arrays.

let a = ['Heloisa', 'Helena', 'Vitória', 'Moisés'];
let o = {
    nome: 'Moisés',
    cargo: 'Back-End',
    idade: 21
};

console.log('Instrução for/in');
for (let itens in o) {                          // for/in pode ser utilizado para qualquer objeto
    console.log(`${itens}: ${o[itens]}`);       // cada interação deste loop a variação declarada em seu corpo receberá a chave da propiedade.
};                             
console.log('');
for (let itens in a) {                          // for/in pode ser utilizado para qualquer objeto
    console.log(`${itens}: ${a[itens]}`);       // cada interação deste loop a variação declarada em seu corpo receberá a chave da propiedade, no caso de um arrey serão recebidos seus index.
};           

console.log('\nInstrução for/of');
for (let itens of a) {       // for/of é utilizado para objetos iteiraveis
    console.log(itens);      // cada interação deste loop a variação declarada em seu corpo recebera uma das propriedades 
};
// como podemos ver for/in não funciona tão bem em arrays, pois quando percorremos arrays esperamos receber os seus valores

/*  
    Objetos comuns não são iteiráveis por pradão, usar for/of em um objeto lançará erro.
    Para percorrer as propriedades de um objeto é melhor usarmos for/in.

    É possível percorrer as propriedade de um objeto utilizando as propriedades:

    - Object.keys: serão coletadas as chaves 'nomes' das propriedades
    - Object.values: serão coletados os valores das propriedades
    - Object.entries: serão coletados os pares de chaves e valores das propriedades
*/

/* 
for (let itens of o) {         // TypeError
    console.log(itens); 
};
*/

console.log('\nfor/of Object.keys:')
for (let itens of Object.keys(o)) {                 // cada interação deste loop a variável declarada em seu corpo receberá a chave da propriedade
    console.log(itens); 
};

console.log('\nfor/of Object.values:')
for (let itens of Object.values(o)) {               // cada interação deste loop a variável declarada em seu corpo receberá a chave da propriedade
    console.log(itens); 
};

console.log('\nfor/of Object.entries:')
for (let [c, v] of Object.entries(o)) {             // cada interação deste loop as variáveis declaradas em seu corpo receberá a chave e o valor da propriedade, aqui estamos utilizando o método de atribuição de descontrução pois este método Object.entries retorna pares de valores
    console.log(c + ': ' + v); 
};

console.log('\nInstrução for/in');
for (let itens in o) {                              // cada interação deste loop a variável declarada em seu corpo receberá a chave da propiedade.
    console.log(itens);                             // Aqui será impresso as chaves do objeto 'o'
    console.log(o[itens]);                          // Aqui será impresso os valores do objeto 'o'
    console.log(itens + ': ' + o[itens]+ '\n');     // Aqui será impresso as chaves e os valores do objeto 'o'
};  