var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');

function contar() {
    if (fim > inicio) {
        for (var c = inicio; c <= fim; passo++ ) {
            console.log(c)
        }
    }
}