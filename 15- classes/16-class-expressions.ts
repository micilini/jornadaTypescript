const Animal = class{
    nome: string = "Baleia";

    interagir(): void{
        console.log('Eu sou uma baleia');
    }
}

const baleia = new Animal();
console.log(baleia.nome);
baleia.interagir();

//Outro exemplo:

class Animal<T> {
    nome: T;

    constructor(nome: T) {
        this.nome = nome;
    }

    interagir(): void {
        console.log(`Eu sou um(a) ${this.nome}`);
    }
}

const baleia = new Animal<string>("Baleia");
console.log(baleia.nome);Baleia
baleia.interagir();//Eu sou um(a) Baleia