function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById("nasc")
    var resultado = document.getElementById("resultado")
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert("[ERRO] Verifique o ano inserido e tente novamente!")
    } else {
        var formSexo = document.getElementsByName("sexo")
        var idade = ano - Number(formAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (formSexo[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/menino.png")
            } else if (idade < 21) {
                img.setAttribute("src", "img/homem-jovem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "img/homem-adulto.png")
            } else {
                img.setAttribute("src", "img/idoso.png")
            }
        } else if (formSexo[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/menina.png")
            } else if (idade < 21) {
                img.setAttribute("src", "img/mulher-jovem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "img/mulher-adulta.png")
            } else {
                img.setAttribute("src", "img/idosa.png")
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        resultado.appendChild(img)
    }
}