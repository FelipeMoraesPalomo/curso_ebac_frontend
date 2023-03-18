const forms = document.querySelectorAll('input')
const button = document.querySelector('button')
const paragrafo = document.querySelector('p')

function seMaior(e) {
    e.preventDefault()
    var valorInputA = parseInt(forms[0].value)
    var valorInputB = parseInt(forms[1].value)
    if (valorInputB > valorInputA) {
        paragrafo.innerHTML = 'FORMULARIO ENVIADO COM SUCESSO'
        paragrafo.classList.remove('valido')
        paragrafo.classList.remove('invalido')
        console.log("Valido")
        paragrafo.classList.add('valido')
    }
    else {
        paragrafo.innerHTML = 'FORMULARIO INVÁLIDO!'
        paragrafo.classList.remove('invalido')
        paragrafo.classList.remove('valido')
        console.log("Invalido")
        paragrafo.classList.add('invalido')
    }
    forms[0].value = ''
    forms[1].value = ''
}

button.addEventListener('click', seMaior)


