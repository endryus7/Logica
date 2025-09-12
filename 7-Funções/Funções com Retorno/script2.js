// função completa com retorno
/*
function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}

let userName = getFirstName('Endryus Montezano dos Reis')

console.log(`Seja bem vindo ${userName}`)
*/

function getFirstName(name, splitChar = " ") {
    let firstName = name.split(splitChar)[0]
    return firstName
}

let userName = getFirstName('Endryus Montezano dos Reis', ' ')

console.log(`Seja bem vindo ${userName}`)

userName = getFirstName('Carlos-Almeida-Juanito', '-')

console.log(`Seja bem vindo ${userName}`)