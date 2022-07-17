function soma(a, b) { //declara função dando um nome, passa os argumentos entre parênteses e separados por vírgula
    return a+b;
}

soma(3, 5); //chama função com os parâmetros necessários

//Manipulando terminal / console

console.log('Hello World, beneath me you will see all even numbers of a serie');

function returnEvenValues(array){
    let evenNums = [];
    for(let i =0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);