function carregar() {    
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12 ) {
        // Bom dia!
        img.src = 'img/manha-redondo.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        document.body.style.background = '#b9846f'
        img.src = 'img/tarde-redondo.png'
    } else {
        // Boa noite!
        img.src = 'img/noite-redondo.png'
        document.body.style.background = '#515154'
    }
}