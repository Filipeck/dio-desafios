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

function positivo10(num){
    const negativo = num < 0;
    const maior10 = num > 10;

    if(negativo){
        return "Esse número é negativo!";
    }else if (!negativo && maior10){
        return "Esse número é positivo e maior que 10";
    }

    return "Esse número é positivo!";
}

console.log(positivo10(15));

//Switch/case - Equivale a uma comparação de tipo e valor (===), sempre precisa de um "default"

function getAnimal(id) {
    switch(id) {
        case 1:
            return "doguinho";
        case 2:
            return "bichano";
        case 3:
            return "lontrinha";
        case 4:
            return "passarinho"
        default:
            return "Esta não é uma opção válida, selecione um número entre 1 e 4!";
    }
}

console.log(getAnimal(2));
console.log(getAnimal("2"));
console.log(getAnimal(6));

