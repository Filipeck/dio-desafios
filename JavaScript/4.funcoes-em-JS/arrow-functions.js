const helloWorld = function(){
    return "Hello World";
}

const helloWorld2 = () => { // tem o mesmo resultado da anterior, porém mais clean
    return "Hello World!";
}

const helloWorld3 = () => "Hello World" //caso exista apenas uma linha, pode dispensar as chaves e o return

const soma = (a,b) => a + b;

console.log(soma(4,6));

const soma2 = a => a;

console.log(soma2(4));

//Obs: Arrow function NÃO faz hoisting