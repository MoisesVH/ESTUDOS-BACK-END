'use strict'

const produtos = [
  { nome: 'Produto A', preco: 10.99 },
  { nome: 'Produto B', preco: 5.49 },
  { nome: 'Produto C', preco: 15.99 },
  { nome: 'Produto D', preco: 7.99 },
];

const produtosDesconto = produtos.map((produto) => {
    const precoComDesconto = produto.preco * 0.9;
    return {...produto, preco: precoComDesconto.toFixed(2)};
});

console.log('Produtos com desconto:');
produtosDesconto.forEach((produto) => {
    console.log(` - ${produto.nome}: R$ ${produto.preco}`);
});