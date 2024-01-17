function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var titulo = document.getElementById("titulo")
    var rodape = document.getElementById("rodape")
    var hora = data.getHours()
    // var hora = 20

    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha-redondo.png"
        document.body.style.backgroundColor = "#ede9e6"
        titulo.style.color = "black"
        rodape.style.color = "black"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde-redondo.png"
        document.body.style.backgroundColor = "#bc7029"
    } else {
        img.src = "img/noite-redondo.png"
        document.body.style.backgroundColor = "#04284c"
    }
}