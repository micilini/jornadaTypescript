//Tipos Primitivos

//Number

let idade: number = 30;
var preco: number = 99.99;
const temperatura: number = -10.5;
let pi: number = 3.14159;
let maiorNumero: number = Infinity;
let naoEhNumero: number = NaN;

//String

let nome: string = "Maria";
const mensagem: string = 'Olá, mundo!';
var cumprimento: string = "Olá, " + nome + "!";
let mensagemIdade: string = `Você tem ${idade} anos.`;

//Boolean

let ativo: boolean = true;
let maiorIdade: boolean = false;
let temContaBancaria: boolean = true;
let temCartaoCredito: boolean = false;
let elegivelParaEmprestimo: boolean = temContaBancaria && !temCartaoCredito;
let possuiPermissao: boolean = true;

//Null e Undefined

let nomeDois: string = "";

if (nomeDois === undefined) {
    console.log("O nome não foi definido.");
}

let carro: string | null = null;

let endereco: string | null = null;

if (endereco === null) {
    console.log("O endereço não está disponível.");
}

let nometres: string = null;  // Erro se "strictNullChecks" estiver ativado
let idadedois: number = undefined;  // Erro se "strictNullChecks" estiver ativado

//BigInt

let numeroGrande: bigint = 1234567890123456789012345678901234567890n;
let a: bigint = 123n;
let b: bigint = 456n;
let soma: bigint = a + b;        // 579n
let diferenca: bigint = b - a;   // 333n
let produto: bigint = a * b;     // 56088n
let quociente: bigint = b / a;   // 3n (divisão de inteiros)
let resto: bigint = b % a;       // 87n

//Symbol

let sym1 = Symbol();
let sym2 = Symbol("descricao");

