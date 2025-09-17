// um objeto é qualquer coisa q representamos como objeto

// constructor em uma class é uma função, ele guarda informaçoes e pode ter comportamento

class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        //let saborDaMassa é a mesma coisa que o this
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
}

let boloFesta = new formaDeBolo('massa de chocolate', 'recheio de nutella')

console.log(boloFesta)