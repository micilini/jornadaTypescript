class Animal{
    nome: string = 'Baleia Comum';//Esse é o método de uma classe

    olaMundo(nome: string): void{
        console.log('Olá Mundo!' + nome);
    }

    retornaNome(nome: string): string{
        return nome;
    }
}

const baleia = new Animal();

baleia.olaMundo('Micilini');//Executa uma mensagem no console
console.log(baleia.retornaNome('Roll'));//Retorna o valor armazenado dentro da propriedade 'nome'