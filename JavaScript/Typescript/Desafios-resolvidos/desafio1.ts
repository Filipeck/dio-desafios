//Desafio 1

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee: {code:number, name: string} = {
    code: 10,
    name: 'John'
}
employee.code = 500;
employee.name = "Smith";

console.log(employee)