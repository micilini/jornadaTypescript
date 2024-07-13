//Tipos Primitivos
//Number
let idade = 30;
var preco = 99.99;
const temperatura = -10.5;
let pi = 3.14159;
let maiorNumero = Infinity;
let naoEhNumero = NaN;
//String
let nome = "Maria";
const mensagem = 'Olá, mundo!';
var cumprimento = "Olá, " + nome + "!";
let mensagemIdade = `Você tem ${idade} anos.`;
//Boolean
let ativo = true;
let maiorIdade = false;
let temContaBancaria = true;
let temCartaoCredito = false;
let elegivelParaEmprestimo = temContaBancaria && !temCartaoCredito;
let possuiPermissao = true;
//Null e Undefined
let nomeDois = "";
if (nomeDois === undefined) {
    console.log("O nome não foi definido.");
}
let carro = null;
let endereco = null;
if (endereco === null) {
    console.log("O endereço não está disponível.");
}
let nometres = null; // Erro se "strictNullChecks" estiver ativado
let idadedois = undefined; // Erro se "strictNullChecks" estiver ativado
//BigInt
let numeroGrande = 1234567890123456789012345678901234567890n;
let a = 123n;
let b = 456n;
let soma = a + b; // 579n
let diferenca = b - a; // 333n
let produto = a * b; // 56088n
let quociente = b / a; // 3n (divisão de inteiros)
let resto = b % a; // 87n
//Symbol
let sym1 = Symbol();
let sym2 = Symbol("descricao");
