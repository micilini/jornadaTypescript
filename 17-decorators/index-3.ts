function meuDecoratorA1(){
    console.log('Decorator Iniciado! A1');

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Decorator sendo executado... A1");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

function meuDecoratorA2(){
    console.log('Decorator Iniciado! A2');

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Decorator sendo executado... A2");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class Animal{
    @meuDecoratorA1()
    @meuDecoratorA2()
    public existir(): void{
        console.log('Eu sou um Animal e eu existo!');
    }
}

const obj = new Animal();
obj.existir();//'Eu sou um Animal e eu existo!'