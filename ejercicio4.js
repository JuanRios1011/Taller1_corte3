const palabras = "Hola Mundo"
function numero_palabras(palabras){
    var palabras2 = palabras.trim()
    palabras2 = palabras2.split(' ')
    console.log("El numero de palabras es: ", palabras2.length)
}

numero_palabras(palabras)