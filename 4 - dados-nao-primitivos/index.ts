//Arrays com Typescript

let nomes: string[] = ['Ana', 'Maria', 'José'];//Criamos um array que só aceita strings
let idades: number[] = [23, 28, 34];//Criamos um array que só aceita números

nomes.push('João');
idades.push(43);

//Exemplo de um array que aceita strings ou números
let misturado: (string | number)[] = ['Ana', 23, 'Maria', 28, 'José', 34];
let misturadoDois: (string | number | null | boolean)[] = ['Ana', 23, 'Maria', 28, 'José', 34];

//Lembrando que podemos usar outros tipos primitivos para criar nossos arrays!

//Declarando arrays com a sintaxe de sinais (< e >)

const numers: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ['Ana', 'Maria', 'José'];

//Exemplo de um arrau que aceita string e numeros
const misturadoTres: Array<string | number> = ['Ana', 23, 'Maria', 28, 'José', 34];
let misturadoQuatro: (string | number | null | boolean)[] = ['Ana', 23, 'Maria', 28, 'José', 34];

//Conhecendo o tipo ANY

let qualquer: any[] = ['Ana', 23, 'Maria', 28, 'José', 34];
qualquer.push(true);

//ou usando a sintaxe antiga:
let qualquerDois: Array<any> = ['Ana', 23, 'Maria', 28, 'José', 34];
qualquerDois.push(true);

//Funções no Typescript

function faleMeuNome(nome: string){
    console.log('Olá : ' + nome);
}
  
let nome = "Micilini Roll";
faleMeuNome(nome);


function faleMeusDados(nome?: string, idade?: number){
    console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
}

faleMeusDados('Micilini', 23);//podemos passar valores diretamente sem a necessidade de fazer referências a variáveis

function faleMeusDadosDois(dados: any[]){
    console.log('Olá, meu nome é ' + dados[0] + ' e tenho ' + dados[1] + ' anos.');
}

faleMeusDadosDois(['Micilini', 23]);//passamos um array com os valores

function somaArray(numeros: number[]){
    let soma: number = 0;
    for(let i:number = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4, 5]));//15

function saudacao(nome: string): string{
    return 'Olá, ' + nome;
}

const boasVindas: string = saudacao('Micilini');//Olá, Micilini

function somaDoisEmCimaDois(numero: number): number{
    return numero + 2;
}

const resultado: number = somaDoisEmCimaDois(2);//4

function qualquerCoisa(): any{
    return 'Olá, mundo!';
}

const retorno: any = qualquerCoisa();

//Função de retorno usando void
function naoRetornoNada(): void{
    console.log('Olá, mundo!');
}

naoRetornoNada();

//Função de retorno usando never
function erro(mensagem: string): never{
    throw new Error(mensagem);
}

//erro("Vai dar ruim, cuidado...");//remova ou comente essa linha para executar os próximos exemplos abaixo

//Funções anônimas com Typescript

const soma = function(a: number, b: number): number{
    return a + b;
}

console.log(soma(2, 3));//5


const somaDois: (a: number, b: number) => number = function(a: number, b: number): number {
    return a + b;
}

console.log(soma(2, 3)); // 5

//Objetos com Typescript

const pessoaObjeto: {nome: string, idade: number} = {
    nome: 'Micilini',
    idade: 23
};//Declarando uma variável como um objeto

const qualquerObjeto: {nome: any, idade: any} = {
    nome: 'Micilini',
    idade: 23
};//Declarando uma variável como um objeto (usando ANY)

function mostraDados(pessoa: {nome: string, idade: number}){
    console.log('Olá, meu nome é ' + pessoa.nome + ' e tenho ' + pessoa.idade + ' anos.');
}

mostraDados({nome: 'Micilini', idade: 23});//Olá, meu nome é Micilini e tenho 23 anos.

function criarPessoaObjeto(nome: string, idade: number): {nome: string, idade: number}{//Aqui estamos dizendo ao TS que estamos retornando um objeto!
    return {nome: nome, idade: idade};
}

console.log(criarPessoaObjeto('Micilini', 23));//{nome: 'Micilini', idade: 23}

//Objetos Opcionais

const pessoaObjetoOpcional: {nome: string, idade?: number} = {//Quando colocamos o ponto de interrogação, estamos dizendo que o campo é opcional
    nome: 'Micilini'
};//Aqui a idade é opcional


function dadosOpcionais(nome: string, idade?:number){
    if(idade){
        console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
    }else{
        console.log('Olá, meu nome é ' + nome + ' e não informei a idade.');
    }
}

dadosOpcionais('Micilini', 23);//Olá, meu nome é Micilini e tenho 23 anos.

function mostraDadosOpcionais(pessoa: {nome: string, idade?: number}){
    if(pessoa.idade){
        console.log('Olá, meu nome é ' + pessoa.nome + ' e tenho ' + pessoa.idade + ' anos.');
    }else{
        console.log('Olá, meu nome é ' + pessoa.nome + ' e não informei a idade.');
    }
}

mostraDadosOpcionais({nome: 'Micilini', idade: 23});//Olá, meu nome é Micilini e tenho 23 anos.

//Podemos declarar arrays de objetos
const pessoas: {nome: string, idade: number}[] = [
    {nome: 'Ana', idade: 23},
    {nome: 'Maria', idade: 28},
    {nome: 'José', idade: 34}
];