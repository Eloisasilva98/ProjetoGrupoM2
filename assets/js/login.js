let emailok = false
let senhaok = false

// tirando o autocomplete do imput para nao ficar mostrando sugestoes para o usuario
$('input').attr('autocomplete', 'off')

// validaçao de email
$('#email').on('input', () => {
    const email = $('#email').val().trim()
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    if (regexEmail.test(email)) {
        $('#apEmail').text('OK') 
        $('#apEmail').css({ 'color': 'green' })
        emailok = true
        
    }

    
    else {
        $('#apEmail').text('* Email inválido') 
        $('#apEmail').css({ 'color': 'red' })
        emailok = false
    }
    
    
})

// validaçao de senha
$('#senha').on('input', () => {
    const senha = $('#senha').val()
     
     
     if (senha.length < 8) {
 
         $('#apSenha').text('* Senha inválida') 
         $('#apSenha').css({ 'color': 'red' })
         senhaok = false
     
     }
     else {
        $('#apSenha').text('') 
         senhaok = true
     }
 
 })  


// função que valida o formulário
 function validaForm() {
    if (emailok && senhaok){
        $('#spanModal').text('Login realizado com sucesso! ')
        $('#linkBtnModal').attr('href', '../index.html')
    }
    else {
        $('#spanModal').text('Um ou mais campos não foram preenchidos corretamente')
        if(emailok == false){
            $('#apEmail').text('* Email inválido') 
            $('#apEmail').css({ 'color': 'red' })
        }
        if(senhaok == false){
            $('#apSenha').text('* Senha inválida') 
            $('#apSenha').css({ 'color': 'red' })
        }
    }
    }