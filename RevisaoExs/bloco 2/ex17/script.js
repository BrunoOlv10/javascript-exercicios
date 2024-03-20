function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número acima')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}