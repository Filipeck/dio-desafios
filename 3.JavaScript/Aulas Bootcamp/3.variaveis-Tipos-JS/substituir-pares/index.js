function substituiPares(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
           console.log("O número já é zero!!");
        } else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 27, 32, 98, 103];
// substituiPares(numeros);

console.log(substituiPares(numeros));