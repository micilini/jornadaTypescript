class Animal{
    existir():void{
        console.log('Eu sou um ANIMAL e existo!');
    }
}

class Baleia extends Animal{
    existir(): void{
        console.log('Eu sou uma BALEIA e existo!');
        console.log('Baleias são DEZ!');
    }
}