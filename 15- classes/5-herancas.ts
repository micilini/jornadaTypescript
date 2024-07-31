class Animal{
    filo!: string;
    peso!: number;
}

class Baleia extends Animal{
    nome!: string;
}

const baleia = new Baleia();
baleia.nome = "Baleia Comum";

//Note que estamos atribuindo valores de propriedades que foram herdadas da classe Animal
baleia.filo = "Chordata";
baleia.peso = 48000;