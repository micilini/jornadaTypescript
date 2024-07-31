class Animal{
    static nome: string = "Baleia Comum";

    static interagir(): void{
        console.log('Eu sou uma Baleia Comum');
    }
}

console.log(Animal.nome);//Baleia Comum
Animal.interagir();
