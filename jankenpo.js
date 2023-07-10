const prompt = require(`prompt-sync`)()
function jankenpo(){
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
    const jankenpo = ["Pedra", "Papel", "Tesoura"]
    let n = jankenpo[random(0, jankenpo.length)]
    if(n == `Pedra`){
        return 1
    }else if(n == `Papel`){
        return 2
    }else{
        return 3
    }
    //return jankenpo[random(0, jankenpo.length)]
}
const tab = ["Pedra", "Papel", "Tesoura"]
let op = `s`
console.log(`Bem vindo ao Jenkenpo!`)
console.log(`As possíveis jogadas são: pedra(1), papel(2) e tesoura(3)\n`)

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
        }else{
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você ganhou!`)
        }
    }else if(player == 1){
        if(pc == 2){
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você perdeu :(`)
        }else {
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você ganhou!`)
        }
    }else if(player == 3){
        if(pc == 1){
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você perdeu :(`)
        }else{
            console.log(`Pedra, papel, tesoura...`)
            console.log(`pc: ${tab[pc-1]}`)
            console.log(`player: ${tab[player-1]}`)
            console.log(`Você ganhou!`)
        }
    }
    op = prompt(`\nDeseja jogar novamente? s/n: `)
}

