$(".enviar").on("click", (e) => {
    e.preventDefault();
    
});

$("#cep").on(''), () => {
    {
        let cep = $("#cep").val()


        $.ajax({
            type: "GET",
            url: "https://viacep.com.br/ws/${cep}/json/",
            dataType: "json",
            success: function (response) {
                $("#rua").val(response.logradouro)

                
            }
        });

}}