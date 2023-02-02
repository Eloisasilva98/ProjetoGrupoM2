let emailok = false
let codigook = false
let novaSenhaok = false
let confSenhaok = false
// funcao do botao previnindo o carregamento do site
$('form').on('submit', (e) => {
    e.preventDefault() 
 })

// tirando o autocomplete do imput para nao ficar mostrando sugestoes para o usuario
$('input').attr('autocomplete', 'off')

$('#spanModalMensagem').text('O campo email não foi preenchido corretamente')
$('.btn-Enviar').attr('data-bs-target', '#modalMensagem')
$('.btn-Enviar').on('click', () => {
    $('#apEmail').text('* Email inválido') 
    $('#apEmail').css({ 'color': 'red' })
})


// Retirando autocompletar dos imputs
$('input').attr('autocomplete', 'off')

// Validação campo email
$('#email').on('input', () => {
    const email = $('#email').val().trim()
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    if (regexEmail.test(email)) {
        $('#apEmail').text('OK') 
        $('#apEmail').css({ 'color': 'green' })
        emailok = true
        $('.btn-Enviar').on('click', () => limpaCampos())
    }

    
    else {
        $('#apEmail').text('* Email inválido') 
        $('#apEmail').css({ 'color': 'red' })
        emailok = false
    }
    
    if(emailok == false){
        $('#spanModalMensagem').text('O campo email não foi preenchido corretamente')
        $('.btn-Enviar').attr('data-bs-target', '#modalMensagem')
        $('.btn-Enviar').on('click', () => {
            $('#apEmail').text('* Email inválido') 
            $('#apEmail').css({ 'color': 'red' })
            $('#linkBtnOk').removeAttr('href')
        })
       
            
        
        
    }
    else{
        $('.btn-Enviar').attr('data-bs-target', '#modalRecuperarSenha')
        $('.btn-Enviar').on('click', () => {
            $('#apEmail').text('OK') 
            $('#apEmail').css({ 'color': 'green' })
        })
    }
})

// Validação do codigo validador
$('#codigoValidacao').on('input', () =>{
    if($('#codigoValidacao').val().length < 5){
        $('#apCodigo').text('* Código inválido') 
        $('#apCodigo').css({ 'color': 'red' })
        codigook = false
    }
    else{
        $('#apCodigo').text('OK') 
        $('#apCodigo').css({ 'color': 'green' })
        codigook = true
    }
})



// validaçao de senha
$('#senha').on('input', () => {
    const senha = $('#senha').val()
     
     
     if (senha.length < 8) {
 
         $('#apSenha').text('Minimo 8 Digitos') 
         $('#apSenha').css({ 'color': 'red' })
         novaSenhaok = false
     
     }
     else {
         $('#apSenha').text('OK') 
         $('#apSenha').css({ 'color': 'green' })
         novaSenhaok = true
     }
 
 })  
 
 // validaçao de confirmaçao de senha
 $('#cSenha').on('input',  ()=>{
     
     const csenha = $('#cSenha').val()
     const senha = $('#senha').val()
 
     if (csenha === senha) {
         $('#apCSenha').text('OK') 
         $('#apCSenha').css({ 'color': 'green' })
         confSenhaok = true
         
         
     }
     else {
         $('#apCSenha').text('senhas nao conferem') 
         $('#apCSenha').css({ 'color': 'red' })
         confSenhaok = false
     }
 
 
 
 })
 

 $('.btn-salvar').on('mouseover', ()=>{
    
        if(codigook && novaSenhaok && confSenhaok){
            $('.btn-salvar').attr('data-bs-target' , '#modalMensagem')
        }
        else{
            $('.btn-salvar').attr('data-bs-target' , '#modalMensagem2')
        }
        
 })
// Atribuindo a função de limpeza dos campos ao botão cancelar 
 $('.btn-cancelar').on('click', () => limpaCampos())

//  Função responsavel por limpar todos os campos do pop-Up de alteração de senha 
function limpaCampos(){
    $('#codigoValidacao').val('')
    $('#apCodigo').text('') 
    $('#senha').val('')
    $('#apSenha').text('') 
    $('#cSenha').val('')
    $('#apCSenha').text('') 
    codigook = false
    novaSenhaok = false
    confSenhaok = false
 }

//  Atribuindo comportamento do botão de salvar do pop-Up de alteraçã de senha
 $('.btn-salvar').on('click',() =>{
    if (codigook && novaSenhaok && confSenhaok){
        $('.btn-salvar').attr('data-bs-target' , '#modalMensagem')
        $('.btn-salvar').attr('data-bs-dismiss' , 'modal')
        $('#spanModalMensagem').text('Senha alterada com sucesso! ')
        $('#linkBtnOk').attr('href', 'login.html')
        $('.btn-ok').attr('data-bs-dismiss' , 'modal')
    }
    else {
        $('.btn-salvar').attr('data-bs-target' , '#modalMensagem2')
        $('.btn-salvar').attr('data-bs-dismiss' , 'modal')
        $('#spanModalMensagem2').text('Um ou mais campos não foram preenchidos corretamente')
        $('.btn-ok').attr('data-bs-target' , '#modalRecuperarSenha')
        
        if(codigook == false){
            $('#apCodigo').text('* Campo inválido') 
            $('#apCodigo').css({ 'color': 'red' })
        }

        if(novaSenhaok == false){
            $('#apSenha').text('* Campo inválido') 
            $('#apSenha').css({ 'color': 'red' })
        }

        if(confSenhaok == false){
            $('#apCSenha').text('* Campo inválido') 
            $('#apCSenha').css({ 'color': 'red' })
        }
        
        
    }
    })