const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i



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
    const nome = $('#nomeCompleto').val().length
    
    
    if (nome == '') {
        
        $('#nomeAp').text('o campo esta vazio') 
        $('#nomeAp').css({ 'color': 'red' })
    }

    else if (nome <= 3) {
        $('#nomeAp').text('Por Favor Coloque Seu Nome Completo') 
        $('#nomeAp').css({ 'color': 'red' })
    }

    else {
        $('#nomeAp').text('Ok') 
        $('#nomeAp').css({ 'color': 'green' })
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
        $('#docAp').text('Ok') 
        $('#docAp').css({ 'color': 'green' })
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
                
            },
            error: function (response) {
             $('#aparecer').text('Não Encontrei Seu cep')  
            },
            
        });

    }
})


// funcao do botao previnindo o carregamento do site

$(".enviar").on("click", (e) => {
    e.preventDefault();
    alert('cadastro enviado com sucesso');
    
});
