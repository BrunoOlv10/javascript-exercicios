function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    var nasc = document.querySelector('input#nasc');
    let msg = document.querySelector('p#msg');
    let foto = document.querySelector('img#imagem');

    if (nasc.value.length == 0) {
        alert('[ERRO] Nenhum ano inserido!')
    } else if (nasc.value > ano) {
        alert('[ERRO] Impossível calcular, ano maior que atual!')
    } else if (nasc.value < 1894) {
        alert('[ERRO] Idade inexistente!')
    } else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano - Number(nasc.value)
        let genero = ''
        let artigo = ''
        if (sexo[0].checked) {
            artigo = 'um'
            if (idade <= 14) {
                foto.setAttribute('src', 'img/menino.png')
                genero = 'menino'
            } else if (idade <= 17) {
                foto.setAttribute('src', 'img/homem-jovem.png')
                genero = 'adolescente'
            }  
            else if ( idade < 30) {
                foto.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'img/homem-adulto.png')
            } else if (idade <= 130) {
                foto.setAttribute('src', 'img/idoso.png')
            }
            if (idade > 17 && idade <= 130) {
                genero = 'homem'
            }
        } else if (sexo[1].checked) {
            genero = 'mulher'
            artigo = 'uma'
            if (idade < 14) {
                foto.setAttribute('src', 'img/menina.png')
                genero = 'menina'
            } else if (idade <= 17) {
                foto.setAttribute('src', 'img/mulher-jovem.png')
                genero = 'adolescente'
            } else if (idade < 30) {
                foto.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'img/mulher-adulta.png')
            } else if (idade <= 130) {
                foto.setAttribute('src', 'img/idosa.png')
            }
            if (idade > 17 && idade <= 130) {
                genero = 'mulher'
            }
        }
        msg.innerHTML = `É ${artigo} ${genero} com ${idade} anos`
    }
}

function limpar() {
    document.getElementById('nasc').value = ''
}