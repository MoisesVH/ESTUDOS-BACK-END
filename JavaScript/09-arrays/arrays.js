/**
 *  Array
 * 
 *      Array são conjuntos de elementos não tipados, seria como varias variáveis armazenadas em um único espaço. Os elementos de um array são indexados e está indexação inicia em 0, os indices serve 
 *  para que possamos ler, gravar e atualizar os elementos.
 * 
 *  Sintaxe:
 *      
 *      let nomeArray = [elemento01, elemento02, elemento03];
 * 
 *      Note que os elementos devem estar dentro de colchetes [] e os elementos devem ser separados por vírgula.
 */

let listaTarefas = ['Assistir vídeo aula', 'Ler assunto estudado', 'Anotar pontos importantes'];

console.log(listaTarefas);
console.log('');


/**
 *  Métodos de array
 *  
 *      
 * 
 *  Métodos para adicionar e remover elementos de um array.
 * 
 *  Sintaxe:
 *      
 *      nomeArray.push(elemento);           Adiciona o elemento informado dentro dos parênteses ao final do array. É possivel adicionar mais de um elemento por vez.
 *      nomeArray.pop();                    Remove o ultimo elemento do array.
 *      nomeArray.unshift(elemento);        Adiciona o elemento informado dentro dos parênteses ao inicio do array, e desloca os demais elementos um indice a direita. É possivel adicionar mais de um elemento por vez.
 *      nomeArray.shift();                  Remove o primeiro elemento do array, e desloca todos os demais elementos um indice a esqueda.
 */

listaTarefas.pop();                                 // Removido o último elemento
console.log(listaTarefas);
listaTarefas.push('Anotar pontos importantes');     // Adicionado novo elemento ao final
console.log(listaTarefas);
listaTarefas.unshift('Tomar café');                 // Adicionao novo elemento no inico
console.log(listaTarefas);
listaTarefas.shift();                               // Removido o primeiro elemento
console.log(listaTarefas);
console.log('')


/**
 *  Podemos utilizar push() e pop() para trabalhar com conceito armazenamento em pilha, onde o último a entrar é o primeira a sair. Podemos também utilizar o unshift() e shift para isso, mas devido ao
 *  deslocamento que esses métodos realizam é mais prático utilizar o push() e pop().
 *  Exemplo:
 */
console.log('Pilhas com push() e pop():')
let bateria = [];
for (let i = 1; i <= 100; i++) {
    bateria.push(`${i}%`);          // carregando a báteria              
};
console.log(bateria);
bateria.pop();                      // Note que os utltimos elementos que entraram serão os primeiros a sair, assim descarregando a báteria.
console.log(bateria);                      
bateria.pop();
console.log(bateria);
bateria.pop();
console.log(bateria);
bateria.pop();
console.log(bateria);
bateria.pop();
console.log(bateria);
bateria.pop();
console.log(bateria);
console.log('')


/** 
 *  Podemos utilizar push() e shift() para trabalhar com o conseito de armazenamento em fila, onde o último a entrar é o último a sair, push adiciona um novo elemento ao final da fila e shift remove o 
 *  primeiro da fila.
 *  Como exemplo vou utilizar a listaTarefas criada antes, pois quando realizar a primeira tarefa ele deve sair da lista e se aparecer novas tarefas devo adicionar no final da fila.
 */

console.log('Filas com push() e shift():');
console.log(listaTarefas);
listaTarefas.push('Praticar assuntos estudados');       // Adicionado nova tarefa
console.log(listaTarefas);
listaTarefas.shift();                                   // Tarefa realizada
console.log(listaTarefas);
listaTarefas.shift();                                   // Tarefa realizada
console.log(listaTarefas);
listaTarefas.shift();                                   // Tarefa realizada
console.log(listaTarefas);
console.log('');


/**  
 *  unshift tem um comportamento diferente quando adicionamos mais de um elemento e quando adiciomos mais de um elemento.
 *  Exemplo:
 */

console.log('unshift');
let numeros = [5, 6, 7];
numeros.unshift(3, 4);
console.log(numeros);
numeros.unshift(3);
numeros.unshift(4);
console.log(numeros);

// Note que quando adicionamos mais de um número de uma só vez ele realiza gravação de acordo com o descrito, mas se tentarmos realizar a mesma ordem um elemento p vez ele não sai como o esperado.

/**
 *  Percorrendo arrays
 *  
 *      Podemos utilizar o for, for/in e for/of para percorrer arrays como vimos quando estudamos estruturas de repetição, agora veremos métodos de array para realizar esta função.
 */