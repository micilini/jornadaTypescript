// Decorator para o getter
function getterDecorator() {
    console.log('Getter Decorator Iniciado!');

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Getter Decorator sendo executado...");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

        const originalMethod = descriptor.get;
        descriptor.get = function() {
            console.log(`Getter para ${propertyKey} chamado`);
            return originalMethod?.apply(this);
        };
    };
}

// Decorator para o setter
function setterDecorator() {
    console.log('Setter Decorator Iniciado!');

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Setter Decorator sendo executado...");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

        const originalSetMethod = descriptor.set;
        descriptor.set = function(value: any) {
            console.log(`Setter para ${propertyKey} chamado com valor ${value}`);
            originalSetMethod?.apply(this, [value]);
        };
    };
}

class Animal {
    private _nome: string = "Micilini";

    @getterDecorator()
    get nome(): string {
        return this._nome;
    }

    @setterDecorator()
    set nome(value: string) {
        this._nome = value;
    }
}

// Testando a classe e os decorators
const animal = new Animal();
console.log(animal.nome); // Espera-se que o getter seja chamado e logue a mensagem
animal.nome = "Luna"; // Espera-se que o setter seja chamado e logue a mensagem
console.log(animal.nome); // Espera-se que o getter seja chamado e logue a mensagem