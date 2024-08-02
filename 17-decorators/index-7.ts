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
            // Modificando o valor antes de passá-lo ao setter original
            const newValue = `Modificado: ${value}`;

            console.log(`Setter para ${propertyKey} chamado com valor ${newValue}`);
            
            // Chama o método setter original com o valor modificado
            originalSetMethod?.apply(this, [newValue]);
        };
    };
}

class Animal {
    private _nome: string = "Micilini";

    @setterDecorator()
    set nome(value: string) {
        this._nome = value;
    }

    get nome(): string {
        return this._nome;
    }
}

// Testando a classe e o decorator
const animal = new Animal();
animal.nome = "Luna"; // Espera-se que o setter seja chamado com o valor "Modificado: Luna"
console.log(animal.nome); // Deve exibir "Modificado: Luna"