import Pessoa, { olaMundo, pi } from './modulo-misto.ts';

console.log(olaMundo('Micilini'));
console.log(pi);

const pessoa = new Pessoa('Roll');
console.log(pessoa.boasVindas());