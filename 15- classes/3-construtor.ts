class Animal{
    nome!: string;
    peso!: number;
    
    constructor(nome: string, peso: number){
        this.nome = nome;
        this.peso = peso;
    }
}

const baleia = new Animal("Baleia Comum", 48000);

console.log(baleia.nome);
console.log(baleia.peso);