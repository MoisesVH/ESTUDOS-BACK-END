/**
 *  Variáreis - representam valores atribuídos a um nome, esses valores pdem ser alterado ao longo do código
 * 
 *  sintaxe:
 *      var nomeVariavel = valor
 *      let nomeVariavel = valor
 *  
 *  Contantes - São variáveis onde não podem ter seu valor alterado ao longo do código
 * 
 *  sintaxe:
 *      const NOME_CONSTANTE = valor
 */

// Ex.:
let x = 1;                  // Neste exemplo o nome da variável é x e o valor atribuído a ela foi 1
x = 'Nova Atribuição';      // Agora a variável x tem como seu valor uma string 'Nova Atribuição'
                            // Note que em JavaScript as variaveis não possuem valores estáticos, em uma variável que possui um valor numérico inicialmente pode ser reatribuida com uma string como no exemplo, apesar desse tipo de reatribuição não ser uma boa prática.

/**
 *  Não podemos dar qualquer nome para uma variável temos que seguir as regas dos indentificadoes
 *      - Só podemos inicia o nome de uma variavel com letras, "_" ou "$"
 *      - Não podemos dar como nome a uma variável palavras reservadas da linguagem
 *      - é uma boa prática nomear as variáveis com letras minusculas, em caso da um nome composto utilizar o padrão camelCase ex.: minhaVariavel
 */

// As variáveis são podem ser declaradas com as intruções var (versão antiga) e let (versão atualizada)
var sum = 1 + 2;

let sub = 2 - 1;

/**
 *  Existe diferenças nessas atruições de variáveis, como comportamento e escopo.
 *      A declaração de variável com var possui o coportamento de içamento, mesmo que eu declare uma variavel no final do meu código ela será içada ao topo, isso faz com que eu possa  chamar uma variavel mesmo antes dela ter sido declarada
 *      A variável declarada com var tem um escopo de função, se eu declarar uma variação dentro de uma função mesmo que o mais fundo do encadeamento dessa função ela valerá para todo copo da funcção.
 *      Ex.:  
 */

// Mostrando o comportamento de içamento
console.log(varVariavel);                      // Chamando a variável antes dela ser declarada
var varVariavel = 'declarando agora';          // Declarando a variável

function testevariavel1() {
    if (true) {
        var variavelFuncao = 'Teste de escopo'; // Variável declarada dentro do encadeamento mais profundo da função
    };

    console.log(variavelFuncao) ;               // Chamando a variável em um nível mais alto que a variavel foi declarada
};                                              // Isso ocorre pois a variável é içada para o topo da função
testevariavel1();

/**
 *  Devido a esses comportamentos que são fontes de bugs, foi criado uma versão atualizadas e melhorada de declarar váriaveis
 *  Se tentarmos utilizar variaveis delaradas com let nesses exemplos ira gerar erros de referencia
 *  Teste:
 */

//console.log(letVariavel);                       // Chamando a variável antes dela ser declarada
//let letVariavel = 'declarando agora';           // Declarando a variável

//function testevariavel2() {
//    if (true) {
//        let variavelFuncao = 'Teste de escopo'; // Variável declarada dentro do encadeamento mais profundo da função
//    };
//
//    console.log(variavelFuncao);                // Chamando a variável em um nível mais alto que a variavel foi declarada
//};                                              // Isso ocorre pois a variável é içada para o topo da função
//testevariavel2();

/**
 *  O comprotamento de içamento não exite na declaração de variáveis com let, e seu escopo é de bloco
 *  O escopo de bloco permite que a variável declarada no nível mais alto do encadeamento seja acessada dentro do ecadeamento mais profundo do qual a variável foi declarada, mas uma variável declarada em um nível mais profundo do encadeamento não pode ser acessado pelos níveis acima deste encadeamento
 *  ex.:
 */

let variavelGlobal = 'Nível Alto';                      // Variável declarada no nível mais alto do código pode ser acessa de qualquer lugar do código
function testevariavel3() {
    console.log(variavelGlobal);                        // Será possível chamar está variável
    let variavelLocal = 'Nível local';                  // Variável declarada no nível local valera somente dentro do bloco desta função e para os ecadeamentos dentro do bloco da função
    if (true) {
        console.log(variavelGlobal);
        console.log(variavelLocal);
        let variavelProfunda = 'Nível mais profundo';   // Declarada no nível mais baixo que o bloco de função e valerá somente dentro do bloco qual foi definida e para os ecadeamentos
                                                        // dentro deste bloco
    };
//    console.log(variavelProfunda);                      // Resultará em erro pois não é possível acessar está variável em um nível mais alto do que foi declarada. 
};
testevariavel3();

/**
 *  As constrantes são declaradas com a instrução const e pussuí um comportamento e escopo iguais a let, a diferença é que const não permite reatribuíção de valores.
 */

const CONSTANTE = 'Não pode ser alterado!'
console.log(CONSTANTE);

CONSTANTE = 'Mudei mesmo assim' // Lançará um erro