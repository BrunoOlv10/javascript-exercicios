function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')
    let msg = document.getElementById('msg')

    if (numero.value.length == 0) {
        msg.style.color = "red"
        msg.text = "Por favor, digite um número acima"
    } else {
        let n = Number(numero.value)
        tabuada.innerHTML = ""
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text = `${n} X ${c} = ${n * c}`
            tabuada.appendChild(item)
        }
    }
}