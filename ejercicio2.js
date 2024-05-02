function numero(num){
    let facto = 1
    for (let index =1; index<=num; index++){
        facto*=index
    }
    console.log(facto)
} numero(+process.argv[2])