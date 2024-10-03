const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5, 5, 223, 7, 9, 8, 7];

function valoresUnicos(array){
    const mySet = new Set (array);

    return [...mySet]; //usamos a técnica spread para retornar um array, sem o método neste caso teríamos como retorno um Set
}

console.log(valoresUnicos(meuArray));