/**
 *  Operadores          Finalidade
 *  ------------------------------
 *  +, -, *, /, %       soma, subtrai, multiplica, divide, retorna o resto da divisão
 *  +                   concatena strings
 *  +, -                operador unário mais e menos
 *  <, >, <=, >=        comparar menor que, maior que, menor ou igual que, maior ou igual que
 *  ++, --              pré ou pós incremento, pré ou pós decremento
 *  ==, !=              comparar se é igual ou diferente
 *  ===, !===           comparar se é igual e do mesmo tipo de dado
 *  &&, ||              concatenação lógica 'e', concatenação lógica 'ou'
 *  .                   Acessar propriedade de um objeto
 *  []                  indexar arrays
 *  ()                  chamar função
 *  ?:                  ternário, retorna booleano em uma condição
 *  <<, >>, >>>         operar bit númerico
 *  ~                   operar bit númerico
 *  !                   complemento lógico
 *  &, |, ^             operadores bit AND, OR e XoR
 *  ,                   separar valores
 *  =                   atribuir valor
 *  +=, -=, *=, /=      atribuir valores somando, subtraindo, multiplicando, dividindo
 *  <<=, >>=, >>>=      operador de bytes (unário)
 *  &=, |=, ^=          operador de bytes AND, OR, XoR (unário)
 *  delete              tonar indefinida um propriedade
 *  in                  verificar existencia de uma propriedade
 *  instanceof          verificar o tipo do objeto
 *  new                 criar objeto
 *  typeof              retonar o tipo de dado
 *  void                retornar valor indefinido
 */

let w = 2 + 3; 
console.log(w);         // Ao utilizar o sinal de + com número será realizado a soma dos números

let x = "2" + "3";
console.log(x);         // Ao utilizar com strings será realizado a concatenação

let y = 2 + "3";
console.log(y);         // Se utilizar o sinal de adição em strings e números o Javascript vai converter o número em string

let z = "2" * 3;
console.log(z+'\n');         // Mas se usarmos qualque outro operador mátematico ele converte a string em número


/**
 *  Opradores Aritméticos
 * 
 *  + ----------- Adição<br>
 *  - ----------- Subtração<br>
 *  * ----------- Multiplicação<br>
 *  / ----------- Divisão<br>
 *  % ----------- Módulo (Resto da divisão)<br>
 *  ** ---------- Potenciação
 *  + ----------- Positivo<br>
 *  - ----------- Negativo<br>
 *  ++ ---------- Incremento +1<br>
 *  -- ---------- Decremento -1<br>
 */

let a = 3 + 2;
let b = 2 - 3;
let c = 3 * 2;
let d = 3 / 2;
let e = 3 % 2;
let f = 3 ** 2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(a++);       //Realiza a incrementação depois de execultar o comando
console.log(b--);       //Realiza a decrementação depois de execultar o comando
console.log(++a);       //Realiza a incrementação antes de execultar o comando
console.log(--b+'\n');  //Realiza a decrementação antes de execultar o comando


/**
 *  Operadores de comparação
 *
 *  < ---------- Menor que<br>
 *  <= --------- Menor ou igual a<br>
 *  > ---------- Maior que<br>
 *  >= --------- Maior ou igual a
 *  == --------- Igual a<br>
 *  === -------- Identidade (compara se os valores e tipos dos operandos são iguais)
 *  != --------- Diferente de
 *  !== ------- Dinferente identidade (compara se os valores e tipos dos operandos são diferentes)
 */

let a2 = 2, b2 = 3, c2 = "3";
console.log(a2 < b2);           // O resultado da comparação é verdadeira pois a é sim menor que b
console.log(a2 > b2);           // Já o resultado desta segunda comparação é falso pois a não é maior que b
console.log(b2 == c2);          // O resultado é verdadeiro, pois sinal de igualdade simples realiza a conversão de tipo e faz a comparação dos valores
console.log(b2 === c2);         // Nesta comparação o resultado é falso, pois o operador de identidade além do valor é verificado o tipo do dado e não realiza ums conversão de tipo.
console.log(c2 !== b2);         // Como visto no ultimo exemplo os operandos testados não são identicos, então o valor retornado da comparação é verdadeiro, são diferentes.
console.log('');


/**
 *  Operadores Lógicos
 *
 *  && --------- AND (e)<br>
 *  || --------- OR (ou)<br>
 *  ! ---------- NOT (Negação)
 */

console.log(a2 < b2 && b2 == c2);    // O operado "e" retorna true se e somente se os dois teste forem verdadeiros

console.log(a2 > b2 || b2 >= c2);   // O operado "ou" retorno true se um dos testes forem veradeiros

console.log(!(b2 === c2));           // O operador "negação" retorno o oposto do valor obtido no teste, se o valor obitido no teste for true com a negação o valor é alterado para false