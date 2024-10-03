const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Cecilia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Filipe',
		nota: 6,
		turma: '2C',
	},
	{
		nome: 'Caio',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados (array, media){
    let aprovados = [];

    for(let i = 0; i < array.length; i++){

        const{nota,nome} = array[i]; //object destructuring

        if (nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}


console.log(alunosAprovados(alunos, 5));