//Exemplos de Union Type

let variavel: number | string = "Micilini";

variavel = 76;
variavel = "Olá Mundo!"
variavel = 78.987;

let variavelDois: number | string | boolean = "Micilini";

function mostraIdade(idade: string | number){
    console.log('Sua idade é: ' + idade);
}

mostraIdade("25");
mostraIdade("12");

const array: Array<number | string> = [22, "Roll", "Mic", "Linth", 980];

function retorno(idade: number | string): number | string{
    if(idade === 25){
        return 25;
    }
    //Se não é número é string, então:
    return "25";
}

let dado: number | string = retorno(25);
dado = retorno("25");

//Union Type com Condicionais

function mostraIdadeDois(idade: number | string){
    if(typeof idade === "string"){
        return "A idade precisa estar no formato NUMBER!"
    }

    return "A idade é: " + idade;
}

console.log(mostraIdadeDois("25"));
console.log(mostraIdadeDois(25));

//Exemplos Type Alias

type meuTipo = string;

let meuNome: meuTipo = "Micilini Roll";

let meuNomeSimilar: string = "Micilini Roll";//É similar a declaração acima!

type ID = number;

let userId: ID = 123;

//Podemos continuar trocando seus valores normalmente
userId = 12;

function mostraId(userId: ID){
    return "Meu ID é: " + userId;
}

console.log(mostraId(33));

//Outros exemplos de Type Alias

type valores = number | string | boolean;

let minhaVariavel: valores = 5;

minhaVariavel = "Rolls";
minhaVariavel = true;

function retornoDois(idade: number | string): valores{
    if(idade === 25){
        return 25;
    }
    //Se não é número é string, então:
    return "25";
}

let dadoDois: valores = retorno(25);
dado = retorno("25");