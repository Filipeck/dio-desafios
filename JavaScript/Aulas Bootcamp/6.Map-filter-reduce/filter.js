function filtraPares(array) {
    return array.filter(callback);
}

function filtraImpares(array) {
    return array.filter(callback2);
}

function callback(item) { // poderia ser dentro da função filtraPares tbm
    return item % 2 === 0;
}

function callback2(item) { 
    return item % 2 !== 0;
}

const array = [1, 23, 45, 68, 4, 6, 98, 77, 45];

console.log(filtraPares(array));
console.log(filtraImpares(array));