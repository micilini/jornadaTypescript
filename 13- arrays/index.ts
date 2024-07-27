//Arrays

let numeros: number[] = [1, 2, 3, 4, 5];
let textos: string[] = ['a', 'b', 'c'];

let numerosDois: Array<number> = [1, 2, 3, 4, 5];
let textosDois: Array<string> = ['a', 'b', 'c'];

let meuArray: (string | number)[] = [];

//Declarando Arrays Multidimensionais

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Propriedade Readonly

let meuArrayDois: ReadonlyArray<string | number> = ["Micilini", "Roll", 99];

//meuArray[0] = "Noner";//Não podemos setar pois é somente leitura

//Modificando um readonly:

let meuArrayTres: ReadonlyArray<string | number> = ["Micilini", "Roll", 99];

meuArrayTres = meuArrayTres.map((item) => {
    return 'Oi';
});

console.log(meuArrayTres);

//Tuplas

let person: [string, number] = ['John', 30];

let txt: [string, string, string, string] = ['Micilini', 'Roll', 'É', 'DEZ!'];

type cincoNumeros = [number, number, number, number, number];
const meusNumeros: cincoNumeros = [1, 2, 3, 4, 5];
console.log(meusNumeros);

//Tupla com Readonly

// Definindo uma tupla readonly
const personDois: readonly [string, number] = ['Alice', 30];

// Tentativas de modificar a tupla irão gerar erros de compilação
// person[0] = 'Bob'; // Erro: Index signature in type 'readonly [string, number]' only permits reading property '0'.
// person[1] = 31; // Erro: Index signature in type 'readonly [string, number]' only permits reading property '1'.

// A tupla pode ser lida sem problemas
console.log(personDois[0]); // Saída: Alice
console.log(personDois[1]); // Saída: 30
