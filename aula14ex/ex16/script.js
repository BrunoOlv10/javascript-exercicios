function contar() {
  let inicio = document.getElementById("inicio")
  let fim = document.getElementById("fim")
  let passo = document.getElementById('passo')
  let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Caixa vazia, impossível contar!"
    } else {
        resultado.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            resultado.innerHTML = "Coloque um valor acima de 0 no passo"
        } else {
            if (i < f) {
                for(let c = i; c <= f; c += p) {
                    resultado.innerHTML += ` ${c} \uD83D\uDC49`
                  }
            } else {
                for(let c = i; c >= f; c -= p) {
                  resultado.innerHTML += `${c} \uD83D\uDC49`
                }
            } 
            resultado.innerHTML += `\uD83C\uDFC1`;
        }
    }
}

    // } else if ((i >= 0 || f >= 0 || p >= 0)) {
    //     if (f > i) {
    //         for(var c = i; c <= f; c = c + p) {
    //           console.log(c);
    //           resultado.innerHTML = `${c}`
    //         }
    //     } else if (f < i) {
    //         for(var c = i; c >= f; c = c - p) {
    //           console.log(c);
    //           resultado.innerHTML = `${c}`
    //         }
    //     }
    // } 

