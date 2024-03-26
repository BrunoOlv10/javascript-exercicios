function carregar() {
    let data = new Date() 
    let hora = data.getHours()
    // let hora = 5
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += ' Bom dia!'
        document.body.style.backgroundColor = '#e2cd9f'
        img.src = 'img/manha-redondo.png'
        img.style.borderColor = 'goldenrod'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        document.body.style.backgroundColor = '#b9846f'
        img.src = 'img/tarde-redondo.png'
        img.style.borderColor = '#b9846f'
    } else if (hora >= 18 && hora < 24) {
        msg.innerHTML += ' Boa noite!'
        document.body.style.backgroundColor = '#515154'
        img.src += 'img/noite-redondo.png'
        img.style.borderColor = '#515154'
    }
}