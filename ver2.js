$(function() {
    var urlGeral = window.location.href
    var geral0 = urlGeral.split("?")
    var tipo = (geral0[1]).split("=")
    var url = "https://script.google.com/macros/s/AKfycbz1e9G3UGR6_GsJSBm5sIEMMl0pk9zTmQQae1k75SXr7kmLBrI/exec?func=getByName&name=" + tipo[1]

    $.getJSON(url, function(x) {
        var dados = x.result
        $("#mercado").append(` ${dados[0]}`)
        $("#resumoGeral").html(dados[1])
        $("#resumoEspecifico").html(dados[2])
        $("#atividade1T").html(dados[3])
        $("#atividade1").html(dados[4])
        $("#atividade2T").html(dados[5])
        $("#atividade2").html(dados[6])
        $("#atividade3T").html(dados[7])
        $("#atividade3").html(dados[8])
    })
})