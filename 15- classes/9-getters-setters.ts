class Animal {
    _peso: number = 48000;

    // Getter para a propriedade peso multiplicado por 2
    get peso(): number {
        return this._peso * 2;
    }

    // Setter para a propriedade peso
    set peso(valor: number) {
        this._peso = valor / 2;
    }
}

// Exemplo de uso
const animal = new Animal();
console.log(animal.peso); // 20 (10 * 2)

animal.peso = 40; // Ajusta o valor interno de _peso para 20 (40 / 2)
console.log(animal.peso); // 40 (20 * 2)