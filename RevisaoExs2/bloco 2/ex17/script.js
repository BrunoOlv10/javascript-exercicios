function gerarTabuada() {
    let numero = document.querySelector('input#numero')
    let tabuada = document.querySelector('select#tabuada')
    
    if (numero.value.length == 0) {
        alert('Nenhum número digitado!')
        numero.focus()
    } else if (numero.value <= 0) {
        alert('Número menor ou igual a 0')
        numero.focus()
    } else {
        let num = Number(numero.value)
        let contador = 0
        tabuada.innerHTML = ''

        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${contador} = ${num * contador}`
            tabuada.appendChild(item)
            contador ++
        }
    }
}

function limparCampo() {
    numero.value = ''
    numero.focus()

    while (tabuada.options.length > 0) {
        tabuada.remove(0)
    }
    let msg = document.createElement('option')
    msg.text = 'Digite um número acima'
    tabuada.appendChild(msg)
}