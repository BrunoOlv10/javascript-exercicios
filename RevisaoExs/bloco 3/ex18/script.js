let numero = document.querySelector('input#numero');
let lista = document.querySelector('select#lista');
let resultado = document.querySelector('div#resultado');
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
    } else  {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        lista.appendChild(item);
        resultado.innerHTML = ''
    } else if (isNumero(numero.value) === false) {
        alert('Número inválido... Digite um número entre 1 e 100!')
    } else {
        alert('Número já encontrado na lista!')
    }
    numero.value = ''
    numero.focus();
}

function finalizar() {
    if(valores.length == 0) {
        alert('Nenhum número inserido!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        resultado.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}

function limpar() {
    numero.value = ''
    lista.innerHTML = ''
    resultado.innerHTML = ''
    valores = []
    numero.focus();
}