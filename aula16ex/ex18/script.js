var numero = document.getElementById('numero')
let lista = document.getElementById('lista')
var resposta = document.getElementById('resposta')
let valores = []

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if(lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        
    } else {
        alert("Valor inválido ou já encontrado na lista")
    }


//     var num = Number(numero.value)
//     var valores = [num]
    
//     if (numero.value.length == 0) {
//         alert("Digite um número")
//     } else if (numero.value > 100 || numero.value <= 0) {
//         alert('Digite um valor entre 1 e 100')
//     }

//     if(num == valores[num]) {
//         alert(`O valor ${valores[num]} já está presente na lista`)
//     } 

//     if (num != valores[num]) {
//         for(c = 0; c < numero.value.length; c++) {
//             var item = document.createElement('option')
//             item.text = valores
//             lista.appendChild(item)
//         }
//     }
// }

// function finalizar() {
//     for (var i = 0; i < valores[num]; i++) {
//         var contador =+ 1
//         if (num > valores[num]) {
//             var maior = num
//         }
//         if (num < valores[num]) {
//             var menor = num
//         }
//         soma += num
//     }
//     media = soma / i
//     resposta.innerHTML = `Temos ao todo ${contador} números cadastrados`
//     resposta.innerHTML = `O maior valor foi ${maior}`
//     resposta.innerHTML = `O menor valor foi ${menor}`
//     resposta.innerHTML = `A soma de todos os valores é ${soma}`
//     resposta.innerHTML = `A média dos valores é ${media}`

}

