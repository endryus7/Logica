let fruta = "banana"

//case(caso seja)
//break(quebra)
//default(se nao for nenhum dos case, sera executado o default)

//pode ter mais de um case em um bloco

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        console.log("segunda mensagem")
        break

    case "banana":
    case "morango":
        console.log ("vitamina")
        break

    case "maça":
        console.log("suco de maça")
        break
        
    default:
        console.log("suco genérico")
}