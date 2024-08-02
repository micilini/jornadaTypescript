function meuDecorator(){
    console.log('Decorator Iniciado!');

    return function(target: any, propertKey?: string, descriptor?: PropertyDescriptor){
        console.log("Decorator sendo executado...");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

@meuDecorator()
class Animal{
    @meuDecorator()
    nome: string = "Micilini";

    @meuDecorator()
    public existir(): void{
        console.log('Eu sou um Animal e eu existo!');
    }
}

//const obj = new Animal();

//console.log(obj.nome);//Isso vai chamar o decorator
//obj.nome = "Rolls";//E isso também

//obj.existir();//'Eu sou um Animal e eu existo!'