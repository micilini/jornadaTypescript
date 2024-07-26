//Operador Rest:

function somaTotal(...n: number[]){
    const soma = n.reduce((number, sum) => sum + number);
    console.log('A soma total é: ' + soma);
}

somaTotal(1, 2, 3, 4, 10, 99, 888);

function concatStrings(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}

console.log(concatStrings('-', 'apple', 'banana', 'cherry'));// Saída: 'apple-banana-cherry'
console.log(concatStrings(' ', 'Hello', 'World'));// Saída: 'Hello World'

//Operador de Desestruturação:

const num = [1, 2, 3, 4, 5];

const [primeiro, segundo, ...restante] = num;

console.log(primeiro);//1
console.log(segundo);//2
console.log(restante);//[3, 4, 5]

const pessoaInfo = {
    nome: 'Alice',
    idade: 30,
    pais: 'Brasil',
    ocupacao: 'Advogada'
};

const { nome, ...detalhes } = pessoaInfo;

function mostraInfo(nome: string, idade: number, ...adicional: (string | number)[]): void {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Informações Adicionais: ${adicional}`);
}

const informacoes: (string | number)[] = ['Desenvolvedor', 5];
const [trabalho, experiencia] = informacoes;

mostraInfo('John Doe', 25, trabalho, experiencia);

function mostraDados({ nome, idade }: { nome: string; idade: number }): string {
    return `Olá ${nome}, parece que você tem ${idade} anos`;
}

console.log(mostraDados({ nome: 'Micilini Roll', idade: 18 }));


