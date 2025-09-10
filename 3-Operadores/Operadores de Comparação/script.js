let numero = '1'
console.log(numero === 1)

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo


// guardar o valor em uma variável de resultado TRUE?FALSE
let marca = 'Apple'
console.log(marca !== 'Apple')
let resultado = marca === 'Samsung'
console.log(resultado)

// !== é diferente ?


let cpfBloqueado = '123.445.222-45'
let cpfUsuario = '222.111.222-09'
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log(`O usuario está barrado ? ${ehCPFBloqueado}`)


let CPFPermitido = '222.555.333-01'
let CPFDoUsuario = '222.555.333-02'
let ehBloqueado = CPFDoUsuario !== CPFPermitido
console.log(`É um usuario invalido ? ${ehBloqueado}`)

// Maior ou menor
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeDoUsuario = 50
let resultadoEhTerceiraIdade = idadeDeCorte <= idadeDoUsuario
console.log(resultadoEhTerceiraIdade)