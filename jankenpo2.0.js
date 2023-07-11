const prompt = require(`prompt-sync`)()

function jankenpo(){
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
    return random(1, 4)
}

const tab = ["Pedra", "Papel", "Tesoura"]
let op = `s`
console.log(`Bem vindo ao Jenkenpo!`)
console.log(`As possíveis jogadas são: pedra(1), papel(2) e tesoura(3)\n`)
let score_pc = 0
let score_player = 0

while(op == `s`){

    let pc = jankenpo()
    let player = parseInt(prompt(`Digite o número de uma jogada: `))

    if(pc == player){
        console.log(`Pedra, papel, tesoura...`)
        console.log(`pc: ${tab[pc-1]}`)
        console.log(`player: ${tab[player-1]}`)
        console.log("empate")
    }else if(player == 2){
        if(pc == 3){
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você perdeu :(`)
            score_pc++
        }else{
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você ganhou!`)
            score_player++
        }
    }else if(player == 1){
        if(pc == 2){
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você perdeu :(`)
            score_pc++
        }else {
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você ganhou!`)
            score_player++
        }
    }else if(player == 3){
        if(pc == 1){
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você perdeu :(`)
            score_pc++
        }else{
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você ganhou!`)
            score_player++
        }
    }
    op = prompt(`\nDeseja jogar novamente? s/n: `)
}
console.log(`Score  player:${score_player}  pc:${score_pc}`)
