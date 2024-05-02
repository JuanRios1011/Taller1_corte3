function palindromo(palabra){
    palabra = palabra.toLowerCase().replace(/\s/g, '')
    return palabra == palabra.split('').reverse().join('')
}
console.log(palindromo("ojo"))
console.log(palindromo("oso"))
console.log(palindromo("ana"))
console.log(palindromo("aro"))
console.log(palindromo("roca"))