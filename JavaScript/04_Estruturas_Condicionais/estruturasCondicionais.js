/**
 *  Estruturas condicionais: 
 *      As estuturas condicianais são blocos de códigos delimitados por chaves {} que serão execultados de acordo com o teste lógico reralizado em seu corpo.
 *      Existe 3 tipos de estruturas condicionais, são elas:
 *          - if
 *          - if/else
 *          - switch
 *  
 *  sintaxe:
 *      if (teste) {
 *          instruções;
 *      };
 * 
 * 
 *      if (teste) {
 *          instruções;
 *      }
 *      else {
 *          instruções;
 *      };
 */

// Ex.:
console.log('Instrução if:');
if (1 > 0) {                                                
    console.log('O teste realizado é verdadeiro, por isso estou sendo executado! \n');
};

// if realiza o teste, se esse teste tiver um resultado vedadeiro as instruções dentro do bloco de if são execultadas


console.log('Instrução if/else:');
if (1 < 0) {                                                
    console.log('O teste realizado é verdadeiro! \n');
}
else {
    console.log('Serei execultado somente se o teste realizado no if for falso. \n');
};

// else complementa a instrução if, e é executada se e somente se o teste de if for falso.


console.log('Aninhando as instruções if e if/else:');
let idade = 23;

if (idade >= 18) {                          // realiza o primeiro teste se for vedadeiro segue para o proximo
    if (idade >= 45) {                      // realiza o segundo teste se for vedadeiro segue para o proximo, se for falso realiza seu else
        if (idade > 60) {                   // realiza o terceiro teste se for vedadeiro exculta suas instruções, se for falso realiza seu else
            console.log('Idoso \n');
        }
        else {
            console.log('Meia-idade \n');
        };
    } 
    else {
        console.log('Maior de idade \n')
    };
}
else {
    console.log('Menor de idade \n')
}

// Note que esse aninhamento é díficil de se entender, Em JavaScript temos uma outra forma de escrever estruturas condicionais aninhadas de forma mais clara, veja no proximo exemplo.


idade = 60;
if (idade < 18) {                           // realiza o primeiro teste se for vedadeiro realiza suas instruções, se for falso segue para o próximo
    console.log('Menor de idade \n');
} 
else if (idade < 45) {                      // realiza o segundo teste se for vedadeiro realiza suas instruções, se for falso segue para o próximo
    console.log('Maior de idade \n');
}
else if (idade < 60) {                      // realiza o terceio teste se for vedadeiro realiza suas instruções, se for falso segue para o próximo
    console.log('Meia-idade \n');
}
else {                                      // aqui não temos um novo teste, então esse bloco else será execultado somente quando todos os teste anteriores forem falsos
    console.log('Idoso \n');
};


/**     
 *  sintaxe:
 *      switch (expressão) {
 *          case valor1:
 *              instruções;
 * 
 *          case valor2:
 *              instruções;
 *      };
 */

console.log('Instrução switch:');

let senha = 'PHD234';

switch (senha) {                            // A estrutura condicional switch é uma melhor opção quando precisamos comparar a mesma expressão com diversos valores

    case 'PHD234':                          // O switch avalia a experssão em parentese e executa o case que corresponde com o valor da expessão
        console.log('Senha correta!');
        break;                              // O break quando chamado exerra a execução de switch, pulando para para proxima instrução fora de switch
                                            // Sem ele a execução continua para os próximos cases e defalult se houver
    default:                                // O default tem a mesma função de um else e sera executado quando nenhum case tem valor correspondente com o da expressão,
        console.log('Senha incorreta!');    // ou quando o case corrspondente não possuir um break que encerre a execução de switch. 
        break;                                   
        
};
