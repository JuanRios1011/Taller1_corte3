function ordenarAscendente(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
}

const numeros = [3, 1, 5, 2, 4];
console.log(ordenarAscendente(numeros));
