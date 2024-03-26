let numero = document.querySelector('input#numero');
let lista = document.querySelector('select#lista');
let resultado = document.querySelector('div#resultado');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionado() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        lista.appendChild(item)
    } else if (isNumero(numero.value) == false && numero.value != '') {
        alert('Digite um número entre 1 e 100!')
    } else if (inLista(numero.value, valores) == true) {
        alert(`Número ${numero.value} já encontrado na lista!`)
    } else if (numero.value == '') {
        alert('Digite algum número para adicionar!')
    }

    numero.value = ''
    numero.focus()
}

function finalizar() {
    if(lista.length == 0) {
        alert('Adicione algum número antes de finalizar!')
    } else {
        let total = lista.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        resultado.innerHTML += `<p>Total: ${total}</p>`
        resultado.innerHTML += `<p>Maior: ${maior}</p>`
        resultado.innerHTML += `<p>Menor: ${menor}</p>`
        resultado.innerHTML += `<p>Soma: ${soma}</p>`
        resultado.innerHTML += `<p>Média: ${media}</p>`
    }
}

function limpar() {
    numero.value = ''
    lista.innerHTML = ''
    resultado.innerHTML = ''
    valores = [];
    numero.focus()
}