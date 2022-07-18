//Solução 1

function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}


console.log(verificaPalindromo('arara'));

//Solução 2

function verificaPalindromoII(word){
    if(!word) return "string inexistente";

    for(let i = 0; i < word.length / 2; i++){
        if(word[i] !== word[word.length -1 -i] ) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromoII('gato'));
//arara
//01234