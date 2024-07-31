class Caixa<T> {
    private conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }

    // Método para obter o conteúdo da caixa
    obterConteudo(): T {
        return this.conteudo;
    }

    // Método para atualizar o conteúdo da caixa
    definirConteudo(conteudo: T): void {
        this.conteudo = conteudo;
    }
}

// Criando instâncias da classe genérica com diferentes tipos
const caixaDeNumero = new Caixa<number>(123);
console.log(caixaDeNumero.obterConteudo()); // Output: 123

const caixaDeString = new Caixa<string>('Olá, TypeScript!');
console.log(caixaDeString.obterConteudo()); // Output: Olá, TypeScript!

//Outro exemplo:

class Utilitario {
    // Método genérico
    trocar<T>(valor: T): T {
        return valor;
    }
}

const util = new Utilitario();
console.log(util.trocar<number>(42)); // Output: 42
console.log(util.trocar<string>('Texto')); // Output: Texto
