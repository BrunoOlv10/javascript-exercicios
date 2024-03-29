function tabuada() {
    let numero = document.querySelector('input#numero')
    let tabuada = document.querySelector('select#tabuada')

    if (numero.value.length == 0) {
        alert('[ERRO] Nenhum número digitado!')
    } else if (numero.value <= 0) {
        alert('[ERRO] Número digitado menor ou igual a 0!')
        numero.focus()
    } else {
        let num = Number(numero.value)
        let c = 0
        tabuada.innerHTML = ''
        
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}

function limpar() {
    numero.value = ''
    numero.focus()
}