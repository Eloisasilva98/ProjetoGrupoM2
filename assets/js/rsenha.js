let emailok = false

$('input').attr('autocomplete', 'off')

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

if(emailok == false){
    
}