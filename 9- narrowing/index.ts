//Exemplo de um Union Type:

let valor: string | number = "Micilini Roll";

valor = 98;
valor = "https://micilini.com/"

//Exemplo de um Narrowing com TypeOf:

function processar(valor: string | number) {
    if (typeof valor === "string") {
      // Narrowing: Aqui, o TypeScript sabe que `valor` é uma `string`
      console.log(valor.toUpperCase());
    } else {
      // Narrowing: Aqui, o TypeScript sabe que `valor` é um `number`
      console.log(valor.toFixed(2));
    }
}

processar("Micilini Roll");
processar(98);

//Exemplo de um Narrowing com InstanceOf:

class Animal {
    nome: string;
    constructor(nome: string) {
      this.nome = nome;
    }
  }
  
class Cachorro extends Animal {
    latir() {
      console.log("Au au!");
    }
}
  
function fazerBarulho(animal: Animal) {
    if (animal instanceof Cachorro) {
      // Aqui TypeScript sabe que animal é um Cachorro
      animal.latir();
    } else {
      // Aqui animal é apenas um Animal
      console.log("Não é um cachorro!");
    }
}

fazerBarulho(new Cachorro("Rex"));
fazerBarulho(new Animal("Rex"));

//Exemplo de um Narrowing com Classes:

class Usuario{
    nome = "Micilini";
}

class Rank{
    rank = 99;
}

function processarClasses(classe: object){
    if(classe instanceof Usuario){
        //Trato a classe como se fosse um Usuario
    }else if(classe instanceof Rank){
        //Trato a classe como se fosse um Rank
    }else{
        //Faço qualquer outra coisa aqui, pois sei que a classe não é um usuario nem um rank
    }
}

processarClasses(new Usuario());
processarClasses(new Rank());

//Exemplo de Narrowing com Null e Undefined:

function processarNada(valor: string | null) {
    if (valor !== null) {
      // Aqui TypeScript sabe que valor não é null
      console.log(valor.trim());
    } else {
      console.log("Valor é null");
    }
}

processarNada("Micilini Roll");
processarNada(null);

//Exemplo de Narrowing com Operador In:

function descrever(serVivo: { nome: string; idade?: number; especie?: string }): string {
    if ('idade' in serVivo) {
      // Aqui, o TypeScript sabe que serVivo tem a propriedade idade
      return `A pessoa ${serVivo.nome} tem ${serVivo.idade} anos.`;
    } else if ('especie' in serVivo) {
      // Aqui, o TypeScript sabe que serVivo tem a propriedade especie
      return `O animal ${serVivo.nome} é da espécie ${serVivo.especie}.`;
    } else {
      return 'Tipo de ser vivo desconhecido.';
    }
}
  
const pessoa = { nome: 'Ana', idade: 30 };
const animal = { nome: 'Rex', especie: 'cachorro' };
  
console.log(descrever(pessoa));  // Saída: A pessoa Ana tem 30 anos.
console.log(descrever(animal));  // Saída: O animal Rex é da espécie cachorro.

//Outro exemplo com interfaces/classes:

interface PessoaI {
    nome: string;
    idade: number;
}
  
interface AnimalI {
    nome: string;
    especie: string;
}
  
type SerVivo = PessoaI | AnimalI;
  
function descreverUm(serVivo: SerVivo): string {
    if ('idade' in serVivo) {
      // Aqui o TypeScript sabe que serVivo é do tipo Pessoa
      return `A pessoa ${serVivo.nome} tem ${serVivo.idade} anos.`;
    } else if ('especie' in serVivo) {
      // Aqui o TypeScript sabe que serVivo é do tipo Animal
      return `O animal ${serVivo.nome} é da espécie ${serVivo.especie}.`;
    } else {
      return 'Tipo de ser vivo desconhecido.';
    }
}
  
const pessoaUm: PessoaI = { nome: 'Ana', idade: 30 };
const animalUm: AnimalI = { nome: 'Rex', especie: 'cachorro' };
  
console.log(descreverUm(pessoaUm));  // Saída: A pessoa Ana tem 30 anos.
console.log(descreverUm(animalUm));  // Saída: O animal Rex é da espécie cachorro.