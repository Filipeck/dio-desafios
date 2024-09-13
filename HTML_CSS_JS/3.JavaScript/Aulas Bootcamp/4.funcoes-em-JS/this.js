console.log(this); // objeto global (se fosse usado em console de navegador retornaria window)

(function (){
    console.log(this); //dentro de uma função
})();

//Dentro de um objeto (método)

const pessoa = {
    firstName: 'Filipe',
    lastName: 'Cayres',

    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

pessoa.getFullName();

//Manipulando valor do This
//Call
const person = {
    nome: 'Cecilia'
};

const animal = {
    nome: 'Dory'
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(animal);

//É possível passar parâmetros para essa função separando-os por vírgulas

const myObj = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

//APPLY - parecida com a call, a diferença é que ao passar os argumentos eles estarão dentro de um array

const myObj2 = {
    num1: 2,
    num2: 4
};

soma.apply(myObj2, [1, 5]);

//Bind - clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function () {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

console.log(bruno());