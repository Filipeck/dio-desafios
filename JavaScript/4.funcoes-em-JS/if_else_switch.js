//If /else
//Ex1
function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return console.log(resultado);
}

numeroPositivo(7);

//Ex 2

function numeroPositivo2(num) {
    let resultado;

    const positive = num > 0;

    if(positive){
        resultado = `O número ${num} é positivo!`
    } else {
        resultado = `O número ${num} não é positivo!`
    }

    return console.log(resultado);
}

numeroPositivo2(-8);

//Ex 3

function numeroPositivo3(num){
    const positive = num > 0;

    if(positive){
        return `O número ${num} é positivo!`;
    }

    return `O número ${num} não é positivo!`;
}

console.log(numeroPositivo3(9));

//Ex 4

