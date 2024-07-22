let valorUm: string | null = "Micilini Roll";
console.log(valorUm.length);

let valorDois: string | null = "Micilini Roll";
console.log(valorDois!.length);

const paragrafo = document.getElementById("nome").
console.log(paragrafo.innerText);

console.log(paragrafo!.innerText);

// Exemplo sem Optional Chaining
if (obj && obj.prop && obj.prop.innerProp) {
    // Faça algo com obj.prop.innerProp
}

// Exemplo com Optional Chaining
if (obj?.prop?.innerProp) {
    // Faça algo com obj.prop.innerProp
}

console.log(paragrafo?.innerText);

if(paragrafo?.innerText){
    console.log(paragrafo!.innerText);
}

console.log(valor?.length);