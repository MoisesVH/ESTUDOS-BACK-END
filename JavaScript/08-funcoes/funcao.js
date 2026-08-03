/**
 *  Funções
 *      Funções são blocos de código que ficam armazedos podendo ser utilizados a qualquer momento no sistema através das chamadas de função, 
 *  quando chamada realiza uma determidada tarefa. Quando se precisa repetir uma mesma tarefa deversas vezes dentro do sistema é eficiente que 
 *  utilize as funções para realizar esta tarefa.
 * 
 *  Definição de função
 *      Temos atualmente mais de uma forma de definir as funções atualemnte, sento por meio da declaração de função, expressão de função 
 *  e a função de seta, veremos exemplos dessas definições a seguir.
 *      As funções podem ou não ser definidas com paramentos, esses parametros quando definidos são usados como variaveis locais dentro 
 *  do corpo da função e de seu encadeamento.
 * 
 *  Declaração de função
 *  
 *  Sintaxe:
 *      
 *      function nomeDaFuncao(parametros) {
 *          bloco de código;
 *      };
 * 
 */


function declaracaoFuncao() {
    console.log('DECLARAÇÃO DE FUNÇÃO\n');
};

declaracaoFuncao();

/**
 *  Expressão de função
 * 
 *  Sintaxe:
 * 
 *      const nomeDaFuncao = function(parametros) {
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
 *      const nomeDaFuncao = (parametros) => {linha de código;};
 * 
 */

const funcaoSeta = () => {console.log('FUNÇÃO DE SETA');};

funcaoSeta();

//      Note que uma função de seta também é uma expressão de função, com a diferenção que são mais compactas. As funções de seta é a única 
//  definição de fução que herda o valor de this dentro do contexto onde foi definida.