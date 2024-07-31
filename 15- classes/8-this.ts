class Animal{
    nome: string = 'Baleia Comum';//Esse é o método de uma classe

    usoDoThis(): void{
        console.log(this.nome);
    }

    usoDoThisDois(nome: string): void{
        this.nome = nome;
    }
}

const baleia = new Animal();

baleia.usoDoThis();
baleia.usoDoThisDois('Cavalo');