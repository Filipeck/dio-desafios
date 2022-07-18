//Tecnica spread (uso das reticencias antes da constante onde os indices do array são espalhados entre os parâmetros)

function sum (a, b, c){
    return a + b + c;
}

const array = [5, 17, 25];

console.log(sum(...array));

//Tecnica Rest - o elemento se torna um array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(7,9,38);

//Object Destructuring - Entre chaves {} podemos filtrar apenas os dados que nos interessam em um objeto

const user = {
    id: 4332,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function showId({id}) {
    return console.log(id);
}

showId(user);
// console.log(showId(user));

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `Name is ${first} ${last}`;
}


console.log(getFullName(user));