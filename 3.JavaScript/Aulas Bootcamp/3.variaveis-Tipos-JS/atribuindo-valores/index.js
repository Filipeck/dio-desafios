//Var e let

var firstName = 'João';
let lastName = 'Souza';

if(firstName === 'João') {
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = "Silva"; //reatribuição

    console.log(lastName);
}

console.log(firstName, lastName);

//Constantes

const FIRST_NAME = 'Cecília'; //é sempre necessário inicializar uma constante, atribuindo seu valor

// FIRST_NAME = 'Amanda'; não podemos reatribuir uma constante
// const FIRST_NAME = 'Mariana'; também não podemos redeclarar