export function adicionaSobrenome(nome: string): string{
    return nome + ' ' + 'Da Silva';
}

export function pegaPrimeiraLetra(texto: string): string {
    return texto.length > 0 ? texto.charAt(0) : '';
}

export function contadorDeCaracteres(texto: string): number {
    return texto.length;
}