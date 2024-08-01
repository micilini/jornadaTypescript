export function olaMundo(nome: string): string {
    return `Olá, ${nome}!`;
}

export const pi = 3.14159;

export default class Pessoa {
    constructor(public nome: string) {}

    boasVindas(): string {
        return `Olá, meu nome é ${this.nome}.`;
    }
}