let tamanhoDocumento = 9
let nomeok = false
let emailok = false
let senhaok = false
let csenhaok = false
let documentook = false
let cepok = false

var regexDocumento = /(^\d{2})(\d{3})(\d{3})(\d{1}|X|x$)/

// tirando o autocomplete do imput para nao ficar mostrando sugestoes para o usuario
$('input').attr('autocomplete', 'off')
$('input').attr('required', 'true')
// quando selecionado pessoa fisica parece o campo rg e quando selecionado pessoa juridica aparece cnpj
$("#pessoaf").change(() => {
    $("#campText").text("RG");
    $('#documento').val('')
    $('#docAp').text('')
    regexDocumento = /(^\d{2})(\d{3})(\d{3})(\d{1}|X|x$)/
    tamanhoDocumento = 9
  });
  
  $("#pessoaj").change(() => {
      $("#campText").text("CNPJ");
      $('#documento').val('')
      $('#docAp').text('')
      regexDocumento = /(^\d{2})(\d{3}(\d{3})(\d{4})(\d{2}$))/
      tamanhoDocumento = 14
  });

//

// funçao de verificar se o nome esta vazio e se é menor que 3 characteres
$('#nomeCompleto').on('input',()=> {
    const nome = $('#nomeCompleto').val().trim()
    const regexNome =/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    
    if (nome == '') {
        
        $('#nomeAp').text('O campo nome esta vazio') 
        $('#nomeAp').css({ 'color': 'red' })
        nomeok = false
       
    }

    else if (nome <= 3) {
        $('#nomeAp').text('Por Favor Coloque Seu Nome Completo') 
        $('#nomeAp').css({ 'color': 'red' })
        nomeok = false
       
    }
    else if (!regexNome.test(nome)) {
        $('#nomeAp').text('Por Favor Use Somente Letras') 
        $('#nomeAp').css({ 'color': 'red' })
        nomeok = false
       
        }

    else {
        $('#nomeAp').text('Ok') 
        $('#nomeAp').css({ 'color': 'green' })
        
        nomeok = true

        
    }

})

// validaçao do documento rg ou cnpj mesma const porem em escopos diferentes teste da aula
$('#documento').on('input', () => {
    const documento = $('#documento').val()
    

    if (regexDocumento.test(documento) && documento.length == tamanhoDocumento ) {
        
        $('#docAp').text('OK') 
        $('#docAp').css({ 'color': 'green' })
        documentook = true
       
    }
    

    else {
        $('#docAp').text('Documento invalido') 
        $('#docAp').css({ 'color': 'red' })
        
        documentook = false
    }

})

// validaçao de email

$('#email').on('input', () => {
    const email = $('#email').val().trim()
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    if (regexEmail.test(email)) {
        $('#emailAp').text('OK') 
        $('#emailAp').css({ 'color': 'green' })
        emailok = true
        
    }

    
    else {
        $('#emailAp').text('coloque um email valido por favor') 
        $('#emailAp').css({ 'color': 'red' })
        emailok = false
    }
    
    
})


// validaçao de senha
 $('#senha').on('input', () => {
   const senha = $('#senha').val()
    
    
    if (senha.length < 8) {

        $('#apSenha').text('Minimo 8 Digitos') 
        $('#apSenha').css({ 'color': 'red' })
        senhaok = false
    
    }
    else {
        $('#apSenha').text('OK') 
        $('#apSenha').css({ 'color': 'green' })
        senhaok = true
    }

})  

// validaçao de confirmaçao de senha
$('#cSenha').on('input',  ()=>{
    
    const csenha = $('#cSenha').val()
    const senha = $('#senha').val()

    if (csenha === senha) {
        $('#apCsenha').text('OK') 
        $('#apCsenha').css({ 'color': 'green' })
        csenhaok = true
        
        
    }
    else {
        $('#apCsenha').text('senhas nao conferem') 
        $('#apCsenha').css({ 'color': 'red' })
        csenhaok = false
    }



})








// consutal a api via cep e inclusao dos valores da api no formulario do site
$("#cep").on('blur', () => {
   
    
        let cep = $("#cep").val()


        $.ajax({
            type: "GET",
            url: `https://viacep.com.br/ws/${cep}/json/`,
            dataType: "json",
            success: function (response) {
                $("#rua").val(response.logradouro);
                $("#bairro").val(response.bairro);
                $("#cidade").val(response.localidade);
                $("#estado").val(response.uf); 
                $("#aparecer").text('ok')
                $('#aparecer').css({ 'color': 'green' })
                
                cepok = true
            },
            error: function (response) {
                $('#aparecer').text('Não Encontrei Seu cep')
                $('#aparecer').css({ 'color': 'red' })   
            },
            
        });

    
})


// funcao do botao previnindo o carregamento do site
$('form').on('submit', (e) => {
   e.preventDefault() 
})


function enviarForm() {
if (nomeok && documentook && senhaok && csenhaok && documentook && cepok){
    alert('nomeok')
    
}
else {
    alert('esta errado')
}
}



