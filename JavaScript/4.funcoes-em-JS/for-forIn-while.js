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

