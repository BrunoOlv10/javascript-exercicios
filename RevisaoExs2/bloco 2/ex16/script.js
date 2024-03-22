function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let msg = document.querySelector('p#msg')
    let resultado = document.querySelector('p#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Preencha todos os campos!')
    } else {
        msg.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo menor ou igual a 0. Vou considerar como 1')
            p = 1
        } 
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}` 
            }
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }
}

function limparCampos() {
    document.querySelector('input#inicio').value = ''
    document.querySelector('input#fim').value = ''
    document.querySelector('input#passo').value = ''
}

function limparContagem() {
    msg.innerHTML = 'Preparando a contagem...'
    resultado.innerHTML = ''
}