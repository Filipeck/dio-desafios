let venceu = 115
let perdeu = 40
let rank = ''
let saldoVitorias = calcularRank(venceu, perdeu)

while(venceu < 0 || perdeu < 0){
    console.log('Informe números inteiros e positivos.')
}

function calcularRank(win = 0, lose = 0){
    win = venceu
    lose = perdeu
    let victories = win - lose

    if(win < lose){
        victories = 0
    }

    return victories
}

if(saldoVitorias <= 10){
    rank = 'Ferro'
}else if(saldoVitorias <= 20){
    rank = 'Bronze'
}else if(saldoVitorias <= 50){
    rank = 'Prata'
}else if(saldoVitorias <= 80){
    rank = 'Ouro'
}else if(saldoVitorias <= 90){
    rank = 'Diamante'
}else if(saldoVitorias <= 100){
    rank = 'Lendário'
}else{
    rank = 'Imortal'
}

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${rank}.`)