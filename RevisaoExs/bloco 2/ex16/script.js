function contar() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let msg = document.querySelector('p#msg');
    let contagem = document.querySelector('p#contagem');

    if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        alert('Todos os campos vazios! Preencha todos antes de continuar')
    } else if (inicio.value.length == 0) {
        alert('Preencha o campo "início"!')
    } else if (fim.value.length == 0) {
        alert('Preencha o campo "fim"!')
    } else if (passo.value.length == 0) {
        alert('Preencha o campo "passo"!')
    } else {
        msg.innerHTML = 'Contando: '
        
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo menor ou igual a 0! Passo será considerado como 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                msg.innerHTML += `${c} \u{1F449} `
            }
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML += `${c} \u{1F449} `
            }
        }
        msg.innerHTML += `\u{1F3C1} `
    }
}

function limparCampos() {
    inicio.value = ''
    fim.value = ''
    passo.value = ''
}

function limparContagem() {
    msg.innerHTML = ''
    contagem.innerHTML = ''
}