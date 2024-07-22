let statusMode: 'success' | 'error';

statusMode = 'success';//Válido
statusMode = 'error';//Válido
statusMode = 'pending';//Inválido, pois 'pending' não esta na lista permitida

let statusCode: 200 | 404 | 500;

statusCode = 200;   // válido
statusCode = 404;   // válido
statusCode = 403;   // inválido, pois 403 não está na lista permitida

let isLoading: true;

isLoading = true;   // válido
isLoading = false;  // inválido, pois só é permitido o valor true

let change: false;

change = true;//Inválido, pois só é permitido o valor false
change = false;//Válido

let all: true | false;

all = true;//Válido
all = false;//Válido

function qualDirecao(direcao: "esquerda" | "direita" | "centro"){
    console.log('Vamos seguir pela ' + direcao);
}

qualDirecao("esquerda");//Válido
qualDirecao("cima");//Inválido, pois "cima" não esta na lista