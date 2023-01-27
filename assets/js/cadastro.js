$("form").on("submit", (e) => {
    e.preventDefault();
});

$("#btn").on('input'), () => {
    {
        let cep = $("#cep").val()


        $.ajax({
            type: "GET",
            url: "https://viacep.com.br/ws/${cep}/json/",
            dataType: "json",
            success: function (response) {
                
                
            }
        });

}}