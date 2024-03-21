let msg = document.querySelector('div#msg')
let imagem = document.querySelector('img#imagem')
let data = new Date()
let hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas. `

if (hora >= 0 && hora < 12) {
    msg.innerHTML += 'Bom dia!'
    imagem.src = 'img/manha-redondo.png'
    document.body.style.backgroundColor = 'goldenrod'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += 'Boa tarde!'
    imagem.src = 'img/tarde-redondo.png'
    document.body.style.backgroundColor = 'brown'
} else if (hora >= 18 && hora < 24) {
    msg.innerHTML += 'Boa noite!'
    imagem.src = 'img/noite-redondo.png'
    document.body.style.backgroundColor = 'darkblue'
}