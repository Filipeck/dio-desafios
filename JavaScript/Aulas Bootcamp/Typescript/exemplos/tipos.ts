type input = number | string;

function somarValores(input1: input, input2: input | string){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }    
}
console.log(somarValores(1, 5));
console.log(somarValores('olá,', ' tudo bem?'));
console.log(somarValores('1', 5));

function somarValoresNumericos(num1: number, num2: number): number { //define o tipo dos parâmetros e o tipo que vai sair, neste caso esta função deve retornar um number
    return num1 + num2;
}

console.log(somarValoresNumericos(1, 3));

// VOID

function printaValoresNumericos(num1: number, num2: number): void{ //void é usado sempre que uma função não retorna nada explicitamente (geralmente significa que ela retorna undefined implicitamente)
    console.log(num1 + num2);
}