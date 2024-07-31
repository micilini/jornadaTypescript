// Definição de uma classe abstrata
abstract class Veiculo {
    // Propriedade comum
    cor: string;
  
    // Construtor para inicializar a propriedade
    constructor(cor: string) {
      this.cor = cor;
    }
  
    // Método abstrato que deve ser implementado pelas subclasses
    abstract acelerar(): void;
  
    // Método concreto que pode ser usado pelas subclasses
    descrever() {
      console.log(`Este veículo é de cor ${this.cor}.`);
    }
  }
  
// Classe concreta que estende a classe abstrata Veiculo
class Carro extends Veiculo {
    // Implementação do método abstrato acelerar
    acelerar() {
      console.log('O carro está acelerando.');
    }
}
  
// Outra classe concreta que estende a classe abstrata Veiculo
class Moto extends Veiculo {
    // Implementação do método abstrato acelerar
    acelerar() {
      console.log('A moto está acelerando.');
    }
}
  
// Instanciando as classes concretas
const meuCarro = new Carro('vermelho');
const minhaMoto = new Moto('azul');
  
// Usando os métodos das instâncias
meuCarro.descrever();  // Saída: Este veículo é de cor vermelho.
meuCarro.acelerar();  // Saída: O carro está acelerando.
  
minhaMoto.descrever(); // Saída: Este veículo é de cor azul.
minhaMoto.acelerar(); // Saída: A moto está acelerando.