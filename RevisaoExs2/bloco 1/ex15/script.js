function verificar() {
    var data = new Date()
    var ano = data.getFullYear()  
    var nasc = document.querySelector('input#nasc');
    var msg = document.querySelector('p#msg');
    var foto = document.querySelector('p#imagem');

    if(nasc.value.length == 0) {
        alert('ERRO! Nenhum número inserido!')
    } else if (nasc.value > ano) {
        alert('ERRO! Impossível calcular, ano maior que atual!')
    } else {
        var sexo = document.getElementsByName('sexo'); 
        var idade = ano - Number(nasc.value)
        var genero = ``
        // img.setAttribute('id', 'foto')
        if (sexo [0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 17) {
                foto.src = 'img/menino.png'
            } else if (idade < 30) {
                foto.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'img/homem-adulto.png')
            } else if (idade <= 130) {
                foto.setAttribute('src', 'img/idoso.png')
            }

        } else if (sexo [1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 17) {
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else if (idade <= 130) {
                img.setAttribute('src', 'img/idosa.png')
            }
        } 
        msg.innerHTML = `É ${genero} com ${idade} anos`
        foto.appendChild(img)
    }
}
// nasc.innerHTML = ''
// msg.innerHTML = ''
// foto.innerHTML = ''