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
    let imagem = document.querySelector('img#imagem')
    
    if (nasc.value.length == 0) {
        alert('Nenhum ano digitado! Digite um ano')
    } else if (nasc.value > ano) {
        alert('Ano digitado maior que 2024')
    } else if (nasc.value < 1894) {
        alert('Já morreu kkkkk \u{1F923}')
    } else {
        imagem.style.borderColor = '#468eec'
        imagem.src = ''

        let sexo = document.getElementsByName('sexo')
        let idade = ano - nasc.value
        let pessoa = ''
        let artigo = ''

        if (sexo[0].checked) {
            artigo = 'um'

            if (idade <= 14) {
                pessoa = 'menino'
                imagem.src = 'img/menino.png'
            } else if (idade <= 17) {
                pessoa = 'adolescente'
                imagem.src = 'img/homem-jovem.png'
            } else if (idade <= 25) {
                imagem.src = 'img/homem-jovem.png'
            } else if (idade <= 59) {
                imagem.src = 'img/homem-adulto.png'
            } else if (idade <= 130) {
                pessoa = 'senhor'
                imagem.src = 'img/idoso.png'
            }

            if (idade >= 18 && idade <= 59) {
                pessoa = 'homem'
            }	
        } else if (sexo[1].checked) {
            artigo = 'uma'
            imagem.style.borderColor = 'purple'

            if (idade <= 14) {
                pessoa = 'menina'
                imagem.src = 'img/menina.png'
            } else if (idade <= 17) {
                pessoa = 'adolescente'
                imagem.src = 'img/mulher-jovem.png'
            } else if (idade <= 25) {
                imagem.src = 'img/mulher-jovem.png'
            } else if (idade <= 59) {
                imagem.src = 'img/mulher-adulta.png'
            } else if (idade <= 130) {
                pessoa = 'senhora'
                imagem.src = 'img/idosa.png'
            }

            if (idade >= 18 && idade <= 59) {
                pessoa = 'mulher'
            }	
        }
        
        msg.innerHTML = `Temos ${artigo} ${pessoa} com ${idade} anos`
    }
}

function limpar() {
    nasc.value = ''
    let masc = document.querySelector('input#masc')
    masc.checked = true
    msg.innerHTML = 'Preencha tudo para ver o resultado abaixo...'
    imagem.style.borderColor = '#468eec'
    imagem.src = ''
    nasc.focus()
}