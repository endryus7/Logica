function torrar(pao, nome = 'Cliente', valor) {
    console.log('torrada feita com ' + pao)
    console.log('ela é um pedido de ' + nome)
    console.log('O valor total é ' + valor)
}

torrar('pão de forma', 'endryus', 10.90)
torrar('pão integral',)

// como boa pratica, deixar a variavel opicional por ultimo

/*
function torrar(pao, valor, nome = 'Cliente') {
    console.log('torrada feita com ' + pao)
    console.log('O valor total é ' + valor)
    console.log('ela é um pedido de ' + nome)
}
*/