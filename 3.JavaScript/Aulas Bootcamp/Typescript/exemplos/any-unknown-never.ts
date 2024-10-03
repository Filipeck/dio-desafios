let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest:string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
// stringTest2 = unknownValor; 

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number):never { //tipo never é usado para um código que nunca foi finalizado, neste caso o Throw ocorreu e o código foi finalizado
    throw{error: erro, code: codigo}
}

jogaErro('deu erro', 500);