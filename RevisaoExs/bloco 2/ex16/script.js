function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let mensagem = document.getElementById('mensagem');
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = ''
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        mensagem.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Vamos considerar o passo como 1...')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c-= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
