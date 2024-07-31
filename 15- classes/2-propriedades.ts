class Animal{
    nome: string = "Baleia Comum";
    reino: string = "Animalia";
    peso: number = 48000;
    capturado!: boolean;
}

class Animal{
    nome: string = "Baleia Comum";
    reino: string = "Animalia";
    peso: number = 48000;
    capturado!: boolean;
}
  
const baleia = new Animal();
console.log(baleia.nome);//Podemos capturar propriedades
baleia.peso = 50000;//Podemos setar valores das propriedades
baleia.capturado = true;//Outro exemplo de setagem de valores