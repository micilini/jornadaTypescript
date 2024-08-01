// Definindo uma interface
export interface Pessoa {
    nome: string;
    idade: number;
}

// Definindo um tipo
export type Produto = {
    nome: string;
    preco: number;
};

// Definindo uma função que usa uma interface
export function apresentarPessoa(pessoa: Pessoa): string {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
}