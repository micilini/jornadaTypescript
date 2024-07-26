//Função sem Retorno:

function olaMundo(): void{
    console.log('Olá Mundo!');
}

olaMundo();

//Função com Retorno:

function retornaString(): string{
    return 'Olá Mundo!';
}

const mensagem: string = retornaString();//Armazena o valor 'Olá Mundo!'

function somaDoisMaisDois(): number{
    return 2 + 2;
}

const adicao: number = somaDoisMaisDois();//Armazena o valor 4

function obterDados(id: number): string | number {
    return "Um"; // Retorna uma string
    return 2;//Se quiser que ela retorne um number só trocar essa linha pela de cima
}

const resultado: string | number = obterDados(2);//Armazena o valor 'Um'

//Função com Parâmetros:

function somar(a: number, b: number): void{
    const soma = a + b;
    console.log('O resultado da soma é: ' + soma);
}

somar(12, 87);
somar(42, 48);

function multiplicar(a: number, b: number): number{
    const multiplicacao = a * b;
    return multiplicacao;
}

const um: number = multiplicar(12, 87);
const dois: number = multiplicar(42, 48);

function processaDados(dado: string | number): void {
    if (typeof dado === "string") {
        console.log("Recebido uma string:", dado);
    } else {
        console.log("Recebido um número:", dado);
    }
}

processaDados("Texto");
processaDados(42);

//Funções com Parâmetros Opcionais:

function exibirDados(nome: string, idade?: number): void {
    console.log(`Nome: ${nome}`);
    if (idade !== undefined) {
        console.log(`Idade: ${idade}`);
    }
}

exibirDados('Micilini Roll', 23);

//Funções com CallBack:

function mostraMensagem(f: () => void): void{
    console.log('Iniciando a Mensagem...');
    f();//Executa a função recebida por parâmetro
}

mostraMensagem(olaMundo);

function mostraMensagemDois(f: (nome: string) => void, meuNome: string): void{
    console.log('Iniciando a Mensagem...');
    f(meuNome);//Executa a função recebida por parâmetro
}

mostraMensagemDois(olaMundo, 'Micilini Roll');

function olaMundoDois(nome: string): string{
    return 'Olá ' + nome;
}

function mostraMensagemTres(f: (nome: string) => string, meuNome: string): void{
    console.log('Iniciando a Mensagem...');
    const mensagem = f(meuNome);//Executa a função recebida por parâmetro
    console.log(mensagem);
}

mostraMensagemTres(olaMundoDois, 'Micilini Roll');

//Funções com Parâmetros Default:

function qualAltura(valor = 80){
    console.log('Altura é: ' + valor);
}

qualAltura();//Seleciona o valor padrão de 80

qualAltura(110);//Define o valor 110

function defineTamanho(altura: number, largura = 118){
    console.log('O tamanho é : ' + altura + 'x' + 'largura');
}

defineTamanho(90);//Usa o 118 como largura
defineTamanho(90, 177);//Aqui estamos definindo um valor para largura

//Tipo Genérico

function identidade<T>(valor: T): T {
    return valor;
}

// Testando a função com diferentes tipos
const numero = identidade(123);        // Tipo inferido: number
const texto = identidade("Hello");     // Tipo inferido: string
const booleano = identidade(true);     // Tipo inferido: boolean

console.log(numero);   // Saída: 123
console.log(texto);    // Saída: Hello
console.log(booleano); // Saída: true

function combinar<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

// Testando a função com diferentes tipos
const resultado1 = combinar(1, "texto"); // Tipo inferido: [number, string]
const resultado2 = combinar(true, 3.14); // Tipo inferido: [boolean, number]

console.log(resultado1); // Saída: [1, "texto"]
console.log(resultado2); // Saída: [true, 3.14]

function elementos<T>(lista: T[]): void {
    // Percorre o array e exibe cada elemento no console
    lista.forEach((item, index) => {
        console.log(`Índice ${index}: ${item}`);
    });
}

//Podemos definir um array de números:
const numeros: number[] = [1, 2, 3, 4, 5];
elementos(numeros); 

//Ou quem sabe um array de strings:
const textos: string[] = ["Olá", "Mundo", "TypeScript"];
elementos(textos); 

//Ou talvez passar varios valores (any):
elementos([1, "micilini", true, "roll", 98]);

//Constraints:

function soNumeros<T extends number | string>(a: T, b: T): T {
    if (typeof a === 'number' && typeof b === 'number') {
        // Se ambos os argumentos são números, retornamos a soma
        return (a + b) as T;
    } else if (typeof a === 'string' && typeof b === 'string') {
        // Se ambos os argumentos são strings, retornamos a concatenação
        return (a + b) as T;
    } else {
        // Se os tipos não são compatíveis, lançamos um erro
        throw new Error("Os argumentos devem ser ambos números ou ambos strings.");
    }
}

// Caso com números
const soma = soNumeros(10, 20);      // Tipo inferido: number
console.log(soma);  // Saída: 30

// Caso com strings
const concatenacao = soNumeros("Olá, ", "Mundo!");  // Tipo inferido: string
console.log(concatenacao);  // Saída: Olá, Mundo!

// Caso com tipos mistos (deve lançar um erro)
// const erro = soNumeros(10, "texto"); // Erro: Os argumentos devem ser ambos números ou ambos strings.

//Tipo Unknown:

function olaMundoTres(nome: unknown){
    if(typeof nome === "string"){//Forma mais correta de se utilizar o unknown
        console.log('Olá ' + nome);
    }
}

olaMundoTres('Micilini');

function olaMundoQuatro(nome: unknown){
    if(Array.isArray(nome)){//Verificamos se o nome é um array antes de printar algo no console
        console.log('Olá ' + nome[0]);
    }
}

olaMundoQuatro('Micilini');

//Tipo Never:

// Função que lança uma exceção e nunca retorna um valor
function throwError(message: string): never {
    throw new Error(message);
}

// Exemplo de uma função que usa uma variável do tipo 'never' para garantir que todos os casos sejam tratados
function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}
