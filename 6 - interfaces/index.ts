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