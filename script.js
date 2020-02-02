$(function() {
    $.getJSON("https://script.google.com/macros/s/AKfycbz1e9G3UGR6_GsJSBm5sIEMMl0pk9zTmQQae1k75SXr7kmLBrI/exec?func=get", function(x) {
        var dados0 = x.result
        var ret = ""
        dados0.map(function(x) {
            ret += `<li class="list-group-item">${x} <button onClick="abrir('/ver2?mercado=${x}')" class="btn btn-primary btn-buyco">Ver</button></li>`
        })
        $("#analiseSetorialSecundario").html(ret)
    })

    $.getJSON("https://script.google.com/macros/s/AKfycby0RXgNcB7vu09so-tbReZbcQGrhEC0UjJFeSVQn-F84SPuykY/exec?func=get", function(x) {
        var dados0 = x.result
        var ret = ""
        dados0.map(function(x) {
            ret += `<li class="list-group-item">${x} <button onClick="abrir('/ver1?mercado=${x}')" class="btn btn-primary btn-buyco">Ver</button> </li>`
        })
        $("#analiseSetorialPrincipal").html(ret)
    })
})

$(".btn-buyco").each(function(x) {
    console.log(x)
})

function abrir(url) {
    window.location.href = url
}