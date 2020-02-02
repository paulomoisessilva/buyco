$(function() {
    var urlGeral = window.location.href
    var geral0 = urlGeral.split("?")
    var tipo = (geral0[1]).split("=")

    var url = "https://script.google.com/macros/s/AKfycby0RXgNcB7vu09so-tbReZbcQGrhEC0UjJFeSVQn-F84SPuykY/exec?func=getByName&name=" + tipo[1]
    $.getJSON(url, function(x) {
        var dados = x.result
        $("#mercado").append(` ${dados[0]}`)
        $("#resumoGeral").html(dados[1])
        $("#resumoEspecifico").html(dados[2])
        $("#quantidade").html(dados[3])
        $("#oportunidade").html(dados[4])
        $("#empregados").html(dados[5])
        $("#publico").html(dados[6])
    })
})