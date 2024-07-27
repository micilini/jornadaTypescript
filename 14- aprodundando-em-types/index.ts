//Tipos Genéricos

function retornaNome<T>(nome: T): string{
    return 'O Nome é: ' + nome;
}

console.log(retornaNome(99));
console.log(retornaNome("Micilini Roll"));

//Uso e Constraints

function mostraProduto<T extends {nome: string}>(produto: T): string{
    return 'O nome do produto é: ' + produto.nome;
}

const produto = {nome: 'Maquina de Lavar', preco: 399.90};
console.log(mostraProduto(produto));

//Tipos Genéricos com Interfaces

interface Container<T> {
    value: T;   // O valor armazenado no contêiner, de tipo genérico T
    name?: string; // Nome opcional do contêiner
}

const numberContainer: Container<number> = {
    value: 42,
    name: 'Answer to the Ultimate Question'
};

const stringContainer: Container<string> = {
    value: 'Hello, TypeScript!',
    name: 'Greeting'
};

const booleanContainer: Container<boolean> = {
    value: true
};

function displayContainer<T>(container: Container<T>): void {
    console.log(`Value: ${container.value}`);
    if (container.name) {
        console.log(`Name: ${container.name}`);
    }
}

// Exibindo os contêineres
displayContainer(numberContainer);
displayContainer(stringContainer);
displayContainer(booleanContainer);

//Types com Tipos Genéricos (Interface)

interface MeuObjeto<T, U, X> {
    nome: T,
    idade: U,
    rank: X,
    status: boolean
}

type Pessoa = MeuObjeto<string, number, number>;
type Animal = MeuObjeto<number, boolean, boolean>;

const minhaPessoa: Pessoa = {nome: "Micilini", idade: 88, rank: 100, status: true};
const meuAnimal: Animal = {nome: 25, idade: true, rank: false, status: false};

//Type parameters

function identity<T>(arg: T): T {
    return arg;
}

const num = identity(5); // num é do tipo number
const str = identity('hello'); // str é do tipo string

function pegaUmaChave<T, K extends keyof T>(obj: T, key: K): string{
    return 'A chave ' + obj[key] + ' está presente dentro do objeto, e possui o valor ' + obj[key];
}

const pessoa = {
    nome: 'Micilini Roll',
    status: true,
}

console.log(pegaUmaChave(pessoa, 'nome'));
console.log(pegaUmaChave(pessoa, 'roll'));//Vai dar um erro, pois a propriedade 'roll' não existe no objeto pessoa

//KeyOf

interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

const key: PersonKeys = 'name'; // Válido
// const invalidKey: PersonKeys = 'address'; // Erro: Type '"address"' is not assignable to type 'PersonKeys'

//Typeof

const greeting = "Hello, world!";

type GreetingType = typeof greeting; // string

const message: GreetingType = "Hello, world!"; // Válido
// const wrongMessage: GreetingType = 123; // Erro: Type 'number' is not assignable to type 'string'

//Indexed Access

interface Person {
    name: string;
    age: number;
}

// Tipo que representa o tipo da propriedade 'name' em Person
type NameType = Person['name']; // string

const names: NameType = 'Alice'; // Válido
// const invalidName: NameType = 42; // Erro: Type 'number' is not assignable to type 'string'

//Conditional Types

type IsString<T> = T extends string ? 'Yes' : 'No';

type Test1 = IsString<string>; // 'Yes'
type Test2 = IsString<number>; // 'No'

//Template Literal Types

type Color = 'red' | 'green' | 'blue';
type ColoredItem = `The color is ${Color}`;

// Exemplos válidos
const color1: ColoredItem = 'The color is red';
const color2: ColoredItem = 'The color is blue';

// Exemplos inválidos
// const invalidColor: ColoredItem = 'The color is yellow'; // Erro: Type '"The color is yellow"' is not assignable to type 'ColoredItem'



