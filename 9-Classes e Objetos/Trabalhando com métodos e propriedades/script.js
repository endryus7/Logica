// métodos é uma função que trabalha em contexto de uma classe


class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar() {
        console.log(`bolo assando de ${this.saborDaMassa}`)
    }
}

let boloFesta = new formaDeBolo('chocolate', 'nutella')
let boloPremium = new formaDeBolo('morango', 'coco')

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()

