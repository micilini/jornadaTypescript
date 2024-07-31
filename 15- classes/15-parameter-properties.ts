class Pessoa {
    constructor(public nome: string, private idade: number) {}

    mostrarNome() {
        console.log(this.nome);
    }

    mostrarIdade() {
        console.log(this.idade);
    }
}

const pessoa = new Pessoa('João', 30);
pessoa.mostrarNome(); // Output: João
pessoa.mostrarIdade(); // Output: 30
