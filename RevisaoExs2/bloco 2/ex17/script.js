function tabuada() {
    let numero = document.querySelector('input#numero')
    let lista = document.querySelector('select#tabuada')

    if (numero.value.length == 0) {
        alert('[ERRO] Nenhum número digitado!')
    } else if (numero.value <= 0) {
        alert('[ERRO] Digite um número maior que 0!')
    } else {
        let num = Number(numero.value)
        let cont = 0
        lista.innerHTML = ''

        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            lista.appendChild(item)
            cont ++
        }
    }
}

function limpar() {
    document.querySelector('input#numero').value = ''  
}