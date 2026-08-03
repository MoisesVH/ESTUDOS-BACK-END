/**
 *  Funções
 *      Funções são blocos de código que ficam armazedos podendo ser utilizados a qualquer momento no sistema através das chamadas de função, 
 *  quando chamada realiza uma determidada tarefa. Quando se precisa repetir uma mesma tarefa deversas vezes dentro do sistema é eficiente que 
 *  utilize uma função para realizar esta tarefa.
 * 
 *  Definição de função
 *      Temos mais de uma forma de definir as funções atualmente, sento por meio da declaração de função, expressão de função 
 *  e a função de seta, veremos exemplos dessas definições a seguir.
 *      As funções podem ou não ser definidas com parâmetros, esses parâmetros quando definidos são usados como variáveis locais dentro 
 *  do corpo da função e de seu encadeamento.
 * 
 *  Declaração de função
 *  
 *  Sintaxe:
 *      
 *      function nomeDaFuncao(parâmetros) {
 *          bloco de código;
 *      };
 * 
 */

console.log('DEFINIÇÃO DE FUNÇÃO\n');

function declaracaoFuncao() {
    console.log('DECLARAÇÃO DE FUNÇÃO\n');
};

declaracaoFuncao();

/**
 *  Expressão de função
 * 
 *  Sintaxe:
 * 
 *      const nomeDaFuncao = function(parâmetros) {
 *          bloco de código;
 *      };
 * 
 */

const expressaoFuncao = function() {
    console.log('EXPRESSÃO DE FUNÇÃO\n');
};

expressaoFuncao();

// As expressões de função não precisam de um identificado (nome), e podem ser usadas como argumentos para outras funções

/**
 *  Função de seta
 * 
 *  Sintaxe:
 * 
 *      const nomeDaFuncao = (parâmetros) => {linha de código;};
 * 
 */

const funcaoSeta = () => {console.log('FUNÇÃO DE SETA\n');};

funcaoSeta();

//  Note que uma função de seta também é uma expressão de função, com a diferenção que são mais compactas. As funções de seta é a única 
//  definição de fução que herda o valor de this dentro do contexto onde foi definida.

/**
 *  Funções parametrizadas
 *  
 *      O uso de parâmetros em funções é opcional, mas quando definidos são usados como variáveis locais dentro do corpo da função e de seu encadeamento. Em JavaScript
 *  os parâmetros não possuem tipo definido, nem mesmo uma validação de tipo, ou seja, podemos passar qualquer tipo de valor para os parâmetros, e o mesmo será aceito.
 *      Veremos a seguir exemplos simples de funções parametrizadas. A sintaxe segue a mesma descrita antes para todas as formas de definição de função.
 */

console.log('FUNÇÕES PARAMETRIZADAS\n');

function soma(a, b) { //definimos os parâmetros a e b
    console.log(`SOMA: ${a + b}\n`); // estamos usando os parâmetros a e b como variáveis locais dentro do corpo da função
};

soma(10, 20); // chamando a função e passando os valores 10 e 20 para os parâmetros a e b
// se não passarmos valores para os parâmetros, eles assumem o valor undefined.

// podemos definir valores padrão para os parâmetros, caso não sejam passados valores na chamada da função, como no exemplo a seguir:

function divisao(a = 1, b = 1) { //definimos os parâmetros a e b com valores padrão
    console.log(`DIVISÃO: ${a / b}\n`);
};

divisao(20, 10); // chamando a função e passando os valores 20 e 10 para os parâmetros a e b
divisao(); // chamando a função sem passar valores para os parâmetros, eles assumem os valores padrão definidos na função
divisao(30); // chamando a função e passando apenas o valor 30, note que o mesmo será atribuido ao parametro na ordem em que foi definido, ou seja, a = 30 e b = 1.

/**
 *  Parâmetros rest
 * 
 *      O parâmetro rest é uma forma de definir um número indefinido de parâmetros em uma função, ele é definido com três pontos (...) antes do nome do parâmetro, 
 *  e deve ser o último parâmetro da função.
 *      Sintaxe:
 *          
 *          function nomeDaFuncao(...Parâmetros) {
 *              bloco de código;
 *          };
 */

console.log('PARÂMETROS REST\n');

function somaRest(...numeros) { //definimos o parâmetro rest numeros
    let resultado = 0; // definimos uma variável local soma para armazenar o resultado da soma
    for (let n of numeros) { // percorremos o array numeros com um for of
        resultado += n; // somamos cada número ao resultado
    }
    console.log(`SOMA: ${resultado}\n`);
};

somaRest(10, 20, 30, 40, 50); // chamando a função e passando um número indefinido de parâmetros

/**
 *  Funções com retorno
 *
 *      As funções por padrão retornam undefined, mas podemos definir um valor de retorno para a função, utilizando a palavra reservada return, que encerra a execução 
 *  da função e retorna o valor definido. 
 * 
 *      Sintaxe:
 *          function nomeDaFuncao(parâmetros) {
 *              bloco de código;
 *              return valor;
 *          };
 */

console.log('FUNÇÕES COM RETORNO\n');

function multiplicacao(a, b) { //definimos os parâmetros a e b
    return a * b; // retornamos o resultado da multiplicação
};

console.log(`MULTIPLICAÇÃO: ${multiplicacao(10, 20)}`); // chamando a função e passando os valores 10 e 20 para os parâmetros a e b, e exibindo o resultado retornado pela função

// Note que a função assume o seu valor retornado, podendo ser armazenada em um variável, ou ser usada como argumento para outra função, e em outras expressão.
