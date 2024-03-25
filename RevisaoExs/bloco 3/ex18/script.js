let numero = document.querySelector('input#numero');
let lista = document.querySelector('select#lista');
let resultado = document.querySelector('div#resultado');
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else  {
        return false;
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        lista.appendChild(item);
        resultado.innerHTML = ''
    } else if (isNumero(numero.value) == false) {
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
        total = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0

        for(let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        
        resultado.innerHTML = ''
        resultado.innerHTML = `Ao todo, temos ${total} números cadastrados`
        resultado.innerHTML = `O maior valor informado é ${maior}`
        resultado.innerHTML = `O menor valor informado é ${menor}`
        resultado.innerHTML = `Somando todos os valores, temos ${soma}`
        resultado.innerHTML = `A média dos valores digitados é ${media}`
    }
}

function limpar() {
    lista.innerHTML = ''
    resultado.innerHTML = ''
    valores.innerHTML = []
}