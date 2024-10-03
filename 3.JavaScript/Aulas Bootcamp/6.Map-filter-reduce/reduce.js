//Exercício 1

function somaNumeros(array) {
    return array.reduce(function(prev, current) { //chama função callback
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const array = [3, 5];

console.log(somaNumeros(array));

//Exercício 2 - lista de compras

const listaCompras = [
{
    nome: 'sabao em pó',
    preço: 30
},
{
    nome: 'cereal',
    preço: 8
},
{
    nome: 'toalha',
    preço: 12
},
{
    nome: 'café',
    preço: 9
},
{
    nome: 'feijão',
    preço: 7
}
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, listaCompras) {
    return listaCompras.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preço;
    }, saldoDisponivel); // primeiro enviamos a callback function e depois como segundo argumento um valor para inicializar o acumulador
}

console.log(calculaSaldo(saldoDisponivel, listaCompras));



