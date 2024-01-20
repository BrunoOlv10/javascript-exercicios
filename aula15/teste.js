let numero = [5, 8, 2, 9, 3]
numero[5] = 6
numero.push(7) //add na última posição
numero.sort()
let posicao = numero.indexOf(4)
if (posicao == -1) {
    console.log(`O valor é inexistente nesse vetor`)
} else {
    console.log(`O valor 4 está na posição ${posicao}`)
}

console.log(`O vetor é ${numero}`)

let vetor = [2, 1, 5, 7, 6]
vetor.sort()
console.log(`O segundo vetor é ${vetor}`)
console.log(`O vetor tem ${vetor.length} posições`)
console.log(`Na segunda posição temos o número ${vetor[1]}`)
