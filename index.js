function sucesso(x) {
     console.log(x.login)
}

function entrar(e) {
    e.preventDefault()
    var user = $("#user")[0].value
    console.log(user)
    if (user) {
        var data = { func: "login", user: user }
        console.log(data)
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