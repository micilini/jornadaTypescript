//Declarando objetos:

const pessoa = {
    nome: 'Lucas',
    idade: 32,
    email: 'lucas@example.com'
};

const aluno: { nome: string; idade: number; matriculado: boolean } = {
    nome: 'Júlia',
    idade: 20,
    matriculado: true
};

//Propriedades Opcionais:

const cliente: { nome: string; telefone: string; [key: string]: any } = {
    nome: 'Fernanda',
    telefone: '1234-5678'
};
  
cliente.email = 'hey@micilini.com';
console.log(cliente.email); //Saída: hey@micilini.com

//Declarando Objetos com Interfaces

interface Pessoa {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}
  
const pessoaObj: Pessoa = {
    nome: 'João',
    idade: 30
    // email é opcional e pode ser omitido
};

//Com Funções:

  
function mostraDadosPessoa(pessoa: Pessoa){
      console.log('Olá: ' + pessoa.nome);
      console.log('Sua Idade é: ' + pessoa.idade);
      if(pessoa.email != undefined){
          console.log('Parece que você enviou um e-mail também... legal, ele é: ' + pessoa.email);
      }
}
  
// Exemplo de uso da função com um objeto que corresponde à interface Pessoa
const pessoaExemplo: Pessoa = {
    nome: 'Fernanda',
    idade: 28,
    email: 'fernanda@example.com' // Este campo é opcional, então também pode ser omitido
};
  
mostraDadosPessoa(pessoaExemplo);

//Objetos com Type

type PessoaTipo = {
    nome: string;
    idade: number;
    email?: string;
}
  
const pessoaObjDois: PessoaTipo = {
    nome: 'Maria',
    idade: 25
};

//Type com Funções:

type PessoaTipoDois = {
    nome: string;
    idade: number;
    email?: string;
};
  
function exibirPessoa(pessoa: PessoaTipoDois): void {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    
    // Verifica se o email está presente e o exibe
    if (pessoa.email) {
      console.log(`Email: ${pessoa.email}`);
    } else {
      console.log('Email não fornecido');
    }
}
  
// Criando um objeto pessoa
const pessoaObjTres: PessoaTipoDois = {
    nome: 'Maria',
    idade: 25
};
  
// Chamando a função para exibir as informações da pessoa
exibirPessoa(pessoaObj);

//Declarando Objetos com Interfaces

interface PessoaDois {
    nome: string;
    idade: number;
    falar(): void; // Método sem parâmetros e sem retorno
}
  
const pessoaObjQuatro: PessoaDois = {
    nome: 'Carlos',
    idade: 40,
    falar: () => {
      console.log('Olá!');
    }
};
  
pessoaObjQuatro.falar(); // Saída: Olá!