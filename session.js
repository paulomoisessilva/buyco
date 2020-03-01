$(function(){
    var logado = sessionStorage.getItem("key")
    
    if(logado !== null){
        $.get("conteudo.html", function(data){
            $(".card").css("height","460px")
            $("#conteudo").html(data);
            var nome = sessionStorage.getItem("nome")
            $("#consultor").html("Consultor: "+nome)
            $("#conteudo").show()
        })
        
        $("#conteudo").show()
        $("#loading").hide()
    }else{
         $("#loading").hide()
         $("#login").show()
    }
})