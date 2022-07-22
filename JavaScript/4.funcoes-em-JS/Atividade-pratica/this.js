function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Cecilia",
    idade: 26
}

const pessoa3 = {
    nome: "Filipe",
    idade: 31
}

console.log(calculaIdade.call(pessoa2,60));

console.log(calculaIdade.apply(pessoa3, [60]));