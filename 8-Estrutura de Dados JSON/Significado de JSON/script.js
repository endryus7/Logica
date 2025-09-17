// JSON - javascript object notation
// chave e valor com o objetivo de transferir dados

let invoice = {
    name: 'Endryus',
    age: 24,
    products: {
        product0: ['mouse gpro', 29.90],
        product1: ['teclado mecânico', 129.99],
        product2: ['monitor', 899.99],
        product3: ['TV 100 polegadas', 10000.90],
    }, 
    taxes: '98.90'
}

/*
console.log(invoice)
console.log(invoice.name)
*/

/*
let name = 'Endryus'
let age = 24
let products = ['mouse gpro', 'teclado mecânico', 'monitor']
let productsValues = [29.90, 129.99, 899.99]
*/

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`----------------------`)

    // for (in) é para percorrer listas em objeto
    for(let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}

