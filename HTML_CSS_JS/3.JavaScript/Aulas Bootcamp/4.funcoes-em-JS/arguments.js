function showArguments(){
    return arguments;
}

console.log(showArguments(7, [1, 3, 9], 'uma string qualquer', 93, 78).length);

//O objeto arguments mostra os argumentos passados em uma função que não tem os seus parâmetros pré-definidos 