interface DNA{
    adenina: number;
    tinina: number;
    citosina: number;
    guanina: number;
    existir(): void;
}
  
class Animal implements DNA{
    nome: string = "Baleia Comum"
    peso: number = 48000;
  
    falar(): void{
      console.log('Baleias não falam... ou Falam?');
    }
  
    //Você precisa implementar as propriedades e métodos de DNA:
    adenina: number = 122
    tinina: number = 988
    citosina: number = 155
    guanina: number = 188
  
    existir(): void{
      console.log('EU EXISTO!');
    }
}
  
const baleia = new Animal();
  
baleia.existir();
baleia.falar();