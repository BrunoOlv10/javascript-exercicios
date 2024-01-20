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
        valores.push(Number(numero.value))
        let item = document.createElement('option') 
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resposta.innerHTML = ""
    } else {
        alert("Valor inválido ou já encontrado na lista")
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let posicao in valores) {
            soma += valores[posicao]
            if(valores[posicao] > maior) {
                maior = valores[posicao]
            }
            if (valores[posicao] < menor) {
                menor = valores[posicao]
            }
        }
        media = soma / total

        resposta.innerHTML = ""
        resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resposta.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}