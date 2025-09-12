torrar()

function torrar() {
    console.log('torrando pão')
    colocarPao()
}

function colocarPao() {
    console.log('Preparando para colocar o pão')
    console.log('Finalizado')
}


// exemplos (fazer funções separadas, nao fazer um monte de ação em uma função, isso é uma boa pratica)

mainSaveData()

// função pai (chama todas as funções)
function mainSaveData() {
    getData()
    checkValues()
    sendToDatabase()
}

// função que pega todos os dados
function getData() {
    console.log('pegando dados do usuário')
    if (1 < 3) {
        console.log('numero encontrado')
    }
}

function checkValues() {
    console.log('validando dados')
}

function sendToDatabase() {
    console.log('cadastrando dados')
}

//////////////////////////////////////

function enviarDados() {
    let nomeDoBanco = 'banco-de-dados'
    console.log(`Salvando dados em: ${nomeDoBanco}`)

    if (3 === 3) {
        console.log('senha validada')
    }
}

enviarDados()