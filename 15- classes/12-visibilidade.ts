//Public

class Animal {
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public falar() {
        console.log('O animal faz um som');
    }
}

const animal = new Animal('Leão');
console.log(animal.nome); // Acessível
animal.falar(); // Acessível

//Protected

class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    protected falar() {
        console.log('O animal faz um som');
    }
}

class Cachorro extends Animal {
    public latir() {
        console.log('O cachorro late');
        this.falar(); // Acesso permitido
    }
}

const cachorro = new Cachorro('Rex');
console.log(cachorro.nome); // Erro: 'nome' é protegido
cachorro.latir(); // Acesso permitido

//Private

class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    private falar() {
        console.log('O animal faz um som');
    }

    public fazerSom() {
        this.falar(); // Acesso permitido
    }
}

const animal = new Animal('Elefante');
console.log(animal.nome); // Erro: 'nome' é privado
animal.fazerSom(); // Acesso permitido, chama 'falar' internamente