function somarValoresNumericosETratar(num1: number, num2: number, callback: (numero: number) => number): number { //define o tipo dos parâmetros e o tipo que vai sair, neste caso esta função deve retornar um number
    let resultado = num1 + num2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo (numero: number): number{
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));