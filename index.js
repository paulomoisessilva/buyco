

function sucesso(x) {
    $("#loading").hide()
     if(x.login){
        $.get("conteudo.html", function(data){
            if($("#sessão").is(':checked')){
                sessionStorage.setItem("key", "logado");
                sessionStorage.setItem("nome", x.dados[0][1]);
            }
            $(".card").css("height","460px")
            $("#conteudo").html(data);
            var nome = sessionStorage.getItem("nome") || x.dados[0][1]
            $("#consultor").html("Consultor: "+nome)
            $("#conteudo").show()
        });
        
    }else{
        $("#login").show()
     }
}

function sair(e){
    e.preventDefault()
    $("#conteudo").html("")
    $("#conteudo").hide()
    $("#login").show()
    $(".card").css("height","300px")
    sessionStorage.removeItem("key");
    sessionStorage.removeItem("nome");
}

function entrar(e) {
    e.preventDefault()
    var user = $("#user")[0].value
    $("#user")[0].value= ""
    if (user) {
        var data = JSON.stringify({ func: "login", user: user })
        $("#login").hide()
        $("#loading").show()

        $.post("https://script.google.com/macros/s/AKfycbxUvCdLw9pLDy2AE6pqLajVGhSCHdql52WNbA6jIan1IRXtvK6Z/exec", data, sucesso    )
    } else {
        $("#digite").show(300)
        setTimeout(function () {
            $("#digite").hide(300)
        }, 3000)
    }
}