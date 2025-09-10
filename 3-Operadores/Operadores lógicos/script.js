// AND ( && ) - os 2 tem q ser verdadeiro
let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

// AND ( && ) - 100 moedas coletadas e 1 item estrela
let moedasColetadas = 90
let item = 'estrela'
let resultado2 = (moedasColetadas === 100) && (item === 'estrela')
console.log(resultado2)

// OR ( || ) - boneco só pode sair se tiver sem chuva ou com guarda chuva (um ou outro tem q ser verdadeiro)
let tempo = 'chuva'
let item2 = 'guarda chuva'
let podeSair = (tempo !== 'chuva') || (item2 === 'guarda chuva')
console.log(podeSair)

// NOT ( ! ) - nega uma afirmação
let tempo2 = 'chuva'
let resultado3 = tempo !== 'chuva'
console.log(!resultado3) // (!resultado) - ! inverte o resultado

let tempo3 = 'chuva'
let horario = 8
let resultado4 = !((tempo !== 'chuva') && (horario > 6))
console.log(resultado4)

