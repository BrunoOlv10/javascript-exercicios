document.getElementById('nasc').addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        document.getElementById('masc').focus();
        event.preventDefault();
    }
});

document.getElementById('masc').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('masc').click();
        event.preventDefault();
    } else if (event.key === 'Tab' && !event.shiftKey) {
        document.getElementById('fem').focus();
        event.preventDefault();
    }
});

document.getElementById('fem').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('fem').click();
        event.preventDefault();
    } else if (event.key === 'Tab' && event.shiftKey) {
        document.getElementById('masc').focus();
        event.preventDefault();
    }
});

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.querySelector('input#nasc')
    let msg = document.querySelector('p#msg')
    let foto = document.querySelector('img#image')

    if (nasc.value.length == 0) {
        alert('[ERRO] Nenhum número inserido!')
    } else if (nasc.value > ano) {
        alert('[ERRO] Ano inserido maior que o atual!')
    } else if (nasc.value < 1894) {
        alert('[ERRO] Já morreu kkkk \u{1F923}')
    } else {
        let sexo = document.getElementsByName('sexo') 
        let idade = ano - Number(nasc.value)
        let pessoa = ''
        let artigo = ''
        if (sexo[0].checked) {
            artigo = 'um'
            if (idade <= 14) {
                pessoa = 'menino'
                foto.setAttribute('src', 'img/menino.png')
            } else if (idade <= 17) {
                pessoa = 'adolescente'
                foto.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 30) {
                foto.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'img/homem-adulto.png')
            } else if (idade <= 130) {
                foto.setAttribute('src', 'img/idoso.png')
                pessoa = 'senhor'
            }
            if (idade > 17 && idade < 60) {
                pessoa = 'homem'
            }
        } else if (sexo[1].checked) {
            artigo = 'uma'
            if (idade <= 14) {
                pessoa = 'menina'
                foto.setAttribute('src', 'img/menina.png')
            } else if (idade <= 17) {
                pessoa = 'adolescente'
                foto.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 30)  {
                foto.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'img/mulher-adulta.png')
            } else if (idade <= 130) {
                foto.setAttribute('src', 'img/idosa.png')
                pessoa = 'senhora'
            }
            if (idade > 17 && idade < 60) {
                pessoa = 'mulher'
            }
        } 
        msg.innerHTML = `Temos ${artigo} ${pessoa} com ${idade} anos`
    }
}

function limpar() {
    nasc.value = ''
    msg.innerHTML = '<p>Preencha tudo para ver o resultado abaixo...</p>'
    let img = document.querySelector('img#image')
    img.src = ''
}