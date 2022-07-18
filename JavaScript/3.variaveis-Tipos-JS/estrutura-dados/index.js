let frase = 'Olá, tudo bem?';

let fraseModificada = frase.replace(",", "!");

console.log(fraseModificada);

console.log(frase.length);

frase = frase.split(" ");

console.log(frase);

frase = frase.includes("tudo");

console.log(frase);


//Numeros

let num1 = 1000;
num1 = 1000 + "%";
console.log(num1);

let num2 = 5000/3000;
num2 = Math.ceil(num2);
console.log(num2);

let num3 = 7000/4000;
num3 = Math.floor(num3);
console.log(num3);

//Arrays

let animais =['cachorro', 'gato', 'elefante', 'leão', 'galo'];

console.log(animais[2]);

animaisString = animais.join('|');

console.log(animaisString);

animais = animais.pop();

console.log(animais);

//Objetos

let obj = {};

obj.name = 'Julia';

console.log(obj);

obj.cidade = 'Salvador'; //forma de incrementar um obj

console.log(obj);

console.log(Object.values(obj));

obj['Estado'] = 'Bahia'; //outra forma de incrementar um obj

console.log(obj.name);
