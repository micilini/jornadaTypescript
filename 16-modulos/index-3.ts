import { Pessoa, Produto, apresentarPessoa } from './tipos';

// Usando a interface
const pessoa: Pessoa = {
    nome: 'João',
    idade: 30
};

// Usando o tipo
const produto: Produto = {
    nome: 'Notebook',
    preco: 2999.99
};

// Usando a função
console.log(apresentarPessoa(pessoa)); // "Nome: João, Idade: 30"