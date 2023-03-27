$(document).ready(function () {
    const button = $('button')
    var listli = document.querySelectorAll('li')
    button.click(function (e) {
        e.preventDefault()
        criaLinha()
    })

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('sublinhado');
    });

    function criaLinha() {
        const inputValor = $('input').val()
        $('ul').append(`<li>${inputValor}</li>`)
        $('input').val('')
    }
});


