let valores = [8, 1, 7, 4, 2, 9]

// for (let posicao = 0;  posicao <= valores.length; posicao++) {
//     console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
// }

for (let posicao in valores) { // esse tipo de for serve para vetores
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}