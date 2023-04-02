$(document).ready(function () {
    $("#telefone").mask('(00) 00000-0000')
    $("#cpf").mask('000.000.000-00')
    $("#cep").mask('00000-000')

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
                minlength: 14
            },
            cep: {
                required: true,
                minlength: 9
            },
            endereco: {
                required: true
            }

        },

        messages: {
            cpf: 'Por favor, insira um CPF válido.',
            cep: 'Por favor, insira um CEP válido.',
            email: 'Por favor, insira um e-mail válido.',
            telefone: 'Este campo é obrigatório',
            endereco: 'Este campo é obrigatório'
        }


    })
})