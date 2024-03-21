function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('ERRO! Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo [0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 10) {
                // criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (sexo [1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10) {
                // criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if(idade < 50) {
                // adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res_genero.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res_foto.appendChild(img)
    }
}