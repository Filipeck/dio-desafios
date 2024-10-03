let heroi = 'Ceifador Y'
let exp_heroi = 0
let exp_monstro = 500
let batalhas = 15
let nivel_heroi = ''
let aventura = true

console.log(heroi + " entrou no mundo Pandora XYZ")

while(aventura){    
    console.log("Oh, não! Um monstro apareceu, lute pela sua vida!")
    for(let i = 0; i < batalhas; i++){
        console.log(heroi + " derrotou o inimigo e ganhou " + exp_monstro + " exp")
        exp_heroi += exp_monstro
        console.log('Experiência do herói: ' + exp_heroi + ' exp.')
    }
    aventura = false
}

if(exp_heroi < 1000){
    nivel_heroi = 'Ferro'
}else if(exp_heroi <= 2000){
    nivel_heroi = 'Bronze'
}else if(exp_heroi <= 5000){
    nivel_heroi = 'Prata'
}else if(exp_heroi <= 7000){
    nivel_heroi = 'Ouro'
}else if(exp_heroi <= 8000){
    nivel_heroi = 'Platina'
}else if(exp_heroi <= 9000){
    nivel_heroi = 'Ascendente'
}else if(exp_heroi <= 10000){
    nivel_heroi = 'Imortal'
}else{
    nivel_heroi = 'Radiante'
}

console.log("\nO Herói, " + heroi + ", está no nível: " + nivel_heroi)

