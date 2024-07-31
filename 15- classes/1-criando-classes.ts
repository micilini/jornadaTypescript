class Animal{
    //A lógica da classe vem aqui
}

//Instanciado Classe por meio de Outra:

class Animal{
    nome!: string;
}

class Humano{
    nome!: string;
}

const metamorfo: Animal = new Humano();