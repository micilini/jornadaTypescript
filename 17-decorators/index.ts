function meuDecorator(){
    console.log('Decorator Iniciado!');

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Decorator sendo executado...");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class Animal{
    @meuDecorator()
    public existir(): void{
        console.log('Eu sou um Animal e eu existo!');
    }
}

const obj = new Animal();
obj.existir();//'Eu sou um Animal e eu existo!'