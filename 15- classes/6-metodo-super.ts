class Animal{
    filo!: string;
    peso!: number;

    constructor(filo: string, peso: number){
        this.filo = filo;
        this.peso = peso;
    }
}

class Baleia extends Animal{
    nome!: string;

    constructor(filo: string, peso: number, nome: string){
        super(filo, peso);
        this.nome = nome;
    }
}