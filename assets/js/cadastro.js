



// quando selecionado pessoa fisica parece o campo rg e quando selecionado pessoa juridica aparece cnpj
$("#pessoaf").change(() => {
    $("#campText").text("RG");
  });
  
  $("#pessoaj").change(() => {
      $("#campText").text("CNPJ");
      
  });

//

// funçao de verificar se o nome esta vazio e se é menor que 3 characteres
$('#nomeCompleto').on('blur', () => {
    const nome = $('#nomeCompleto').val().trim()
    const regexNome =/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    
    if (nome == '') {
        
        $('#nomeAp').text('O campo nome esta vazio') 
        $('#nomeAp').css({ 'color': 'red' })
    }

    else if (nome <= 3) {
        $('#nomeAp').text('Por Favor Coloque Seu Nome Completo') 
        $('#nomeAp').css({ 'color': 'red' })
    }
    else if (!regexNome.test(nome)) {
        $('#nomeAp').text('Por Favor Use Somente Letras') 
        $('#nomeAp').css({ 'color': 'red' })
        }

    else {
        $('#nomeAp').text('Ok') 
        $('#nomeAp').css({ 'color': 'green' })
        return true
    }

})

// validaçao do documento rg ou cnpj
$('#documento').on('blur', () => {
    const documento = $('#documento').val().length
    
    
    if (documento == '') {
        
        $('#docAp').text('o campo esta vazio') 
        $('#docAp').css({ 'color': 'red' })
    }

    else if (documento < 9) {
        $('#docAp').text('Por Favor coloque um documento valido') 
        $('#docAp').css({ 'color': 'red' })
    }

    else {
        $('#docAp').text('OK') 
        $('#docAp').css({ 'color': 'green' })
        
        return true
    }

})

// validaçao de email

$('#email').on('blur', () => {
    const email = $('#email').val().trim()
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    if (regexEmail.test(email)) {
        $('#emailAp').text('OK') 
        $('#emailAp').css({ 'color': 'green' })
        return true
        
    }
    else {
        $('#emailAp').text('coloque um email valido por favor') 
        $('#emailAp').css({ 'color': 'red' })
    }

})


// validaçao de senha
$('#senha').on('blur', () => {
   const senha = $('#senha').val()
    
    
    if (senha.length < 8) {

        $('#apSenha').text('Minimo 8 Digitos') 
        $('#apSenha').css({ 'color': 'red' })

    
    }
    else {
        $('#apSenha').text('OK') 
        $('#apSenha').css({ 'color': 'green' })
    }

})  

// validaçao de confirmaçao de senha
$('#cSenha').on('blur', () => {
    
    const csenha = $('#cSenha').val()
    const senha = $('#senha').val()

    if (csenha === senha) {
        $('#apCsenha').text('OK') 
        $('#apCsenha').css({ 'color': 'green' })
        
    }
    else {
        $('#apCsenha').text('senhas nao conferem') 
        $('#apCsenha').css({ 'color': 'red' })

    }



})








// consutal a api via cep e inclusao dos valores da api no formulario do site
$("#cep").on('blur', () => {
   
    {
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
        
                
                
            },
            error: function (response) {
                $('#aparecer').text('Não Encontrei Seu cep')
                $('#aparecer').css({ 'color': 'red' })   
            },
            
        });

    }
})


// funcao do botao previnindo o carregamento do site

$(".enviar").on("click", (e) => {
    e.preventDefault();
    alert('cadastro enviado com sucesso');
    
});




