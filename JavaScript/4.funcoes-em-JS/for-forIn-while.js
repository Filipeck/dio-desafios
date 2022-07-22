//For
function vezesDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const numeros = [30, 5, 90, 490, 110, 100020, 13];

vezesDois(numeros);

console.log(vezesDois(numeros));

//For...in - Loop entre propriedades enumeráveis de um objeto

function forInExample(obj) {
    for(key in obj) {
        console.log(key);
    }
}

function takeValue(obj) {
    for(key in obj) {
        console.log(obj[key]);
    }
}

const myObject = {
    nome: "Filipe",
    idade: "31",
    cidade: "Salvador"
}

forInExample(myObject);

takeValue(myObject);

//For...of - Loop entre estruturas iteráveis (arrays, strings)

function logLetras(palavra){
    for(letra of palavra) {
        console.log(letra);
    }
}

const fruta = 'Jenipapo';

logLetras(fruta);

//While - Executa instruções até que a condição se torne falsa

function whileExample(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

whileExample();

//do...while - Executa instruções até que a condição se torne falsa, porém a primeira execução SEMPRE ocorre

function doWhileExample(){
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <= 5);
}
doWhileExample();