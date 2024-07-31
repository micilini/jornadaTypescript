class Animal{
    readonly nome: string = "Baleia Comum";
}

const baleia = new Animal();

console.log(baleia.nome);

baleia.nome = "Baleia Orca";//Erro no Typescript, pois a propriedade nome é readonly