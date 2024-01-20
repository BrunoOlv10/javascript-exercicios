function fatorial(numero) {
    let fatorial = 1
    for (let c = numero; c > 1; c--) {
        fatorial *= c
    }
    return fatorial
}

console.log(fatorial(3))