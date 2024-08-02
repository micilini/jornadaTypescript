function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // Altera a propriedade enumerable do descritor do método
        descriptor.enumerable = value;

        // Log para depuração
        console.log(`Decorator aplicado ao método ${propertyKey}`);
        console.log(`Enumerable: ${value}`);
    };
}

class Animal {
    @enumerable(true)
    public existir(): void {
        console.log('Eu sou um Animal e eu existo!');
    }

    @enumerable(false)
    public esconder(): void {
        console.log('Eu sou um Animal e eu me escondo!');
    }
}

// Para testar a configuração enumerable, você pode usar o seguinte código

const obj = new Animal();

// Verifica quais métodos são enumeráveis
console.log(Object.keys(obj)); // Deve listar apenas métodos com enumerable: true

// Para depuração, pode ser útil verificar a configuração dos descritores
console.log(Object.getOwnPropertyDescriptor(Animal.prototype, 'existir')); // Deve mostrar enumerable: true
console.log(Object.getOwnPropertyDescriptor(Animal.prototype, 'esconder')); // Deve mostrar enumerable: false