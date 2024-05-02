function area(radio){
    var pi = Math.PI
    var area = pi * (radio ** 2)
    console.log(area)
}
area(process.argv[2])