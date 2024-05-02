let dinero = 20000
const impuestos = 15

function pago(dinero, impuestos){
    let valor = dinero*(impuestos/100)
    console.log(valor)
}
pago(dinero, impuestos)