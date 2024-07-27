interface Usuario{
    nome: string,
    idade: number,
    ativo: boolean
}

const dadosUsuario: Usuario = {
    nome: "Micilini",
    idade: 28,
    ativo: true,
}

const dadosUsuarioDois: Usuario = {
    nome: "Micilini",
    ativo: true,
    idade: 77
}

const dadosUsuarioTres: Usuario = {
    nome: "Micilini",
    ativo: true,
    idade: 77
}

//Interfaces com funções

function saudarUsuario(usuario: Usuario){
    console.log(`Olá ${usuario.nome}, tudo bem?`)
}

saudarUsuario(dadosUsuario);

//Observe agora como podemos retornar uma interface usando uma função:

interface UsuarioDois{
    nome: string,
    idade: number,
    ativo: boolean
}

function criarUsuario(nome: string, idade: number, ativo: boolean): UsuarioDois{
    return {
        nome,
        idade,
        ativo
    }
}

const usuario: UsuarioDois = criarUsuario("Micilini", 28, true);

//Alterando uma interface

interface Usuario{
    id: number,
    nome: string,
    idade: number,
    ativo: boolean,
    telefone?: string,
    //Crie um método opcional
    saudar?(): string
}

//Propriedade readonly

interface Livro {
    readonly titulo: string;
    autor: string;
    anoPublicacao?: number; // Opcionais
  }
  
  const livro: Livro = {
    titulo: 'O Guia do Mochileiro das Galáxias',
    autor: 'Douglas Adams'
  };
  
  // livro.titulo = 'Outro Título'; // Erro: Propriedade somente leitura
  livro.autor = "Fernando";

//Usando o Index Signature dentro de uma Interface

interface NomeDaInterface{
    [index: string]: number
}

let meuObjeto: NomeDaInterface = {
    micilini: 10,
    roll: 65
}

let meuObjetoDois: NomeDaInterface = {
    roll: 988,
    micilini: 1007
}

//Heranças

interface Animal{
    nome: string,
    classe: string
}

interface SuperAnimal extends Animal{
    poder: string[],
    rankDeHeroi: number
}

const peixe: SuperAnimal = {
    nome: 'Peixe',
    classe: 'Do Mar',
    poder: ['Respirar fora da agua', 'Conversar igual humano', 'Voar até a extratosfera sem danos'],
    rankDeHeroi: 32
}

console.log(peixe);

//Interseção com Interfaces:

// Definindo dois tipos
type Humano = {
    nome: string;
    idade: number;
  };
  
  type Trabalhador = {
    cargo: string;
    salario: number;
  };
  
  // Criando um tipo de interseção
  type Funcionario = Humano & Trabalhador;
  
  // Criando um objeto que corresponde ao tipo Funcionario
  const funcionario: Funcionario = {
    nome: 'Maria',
    idade: 30,
    cargo: 'Desenvolvedora',
    salario: 5000
  };
  
  console.log(funcionario);