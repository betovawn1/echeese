$("input#newsletterButtonOK").on("click", function() {
    let form = {
        firstName: $(this).parent().find("input#newsletterClientName").val(),
        email: $(this).parent().find("input#newsletterClientEmail").val(),
        isNewsletterOptIn: !0
    }
    $("p.newsSucess, p.newsError").hide()

    if ($('input[name="newsletterClientName"]').val() == '' || $('input[name="newsletterClientEmail"]').val() == '') {
        alert("Preencha TODOS os campos !")
    } else {
        if (validateEmail(form.email)) {
            cadastraNewsletter(form.email, form)
        } else {
            alert("Cadastre um e-mail válido")
        }
    }
})

function validateEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}

function cadastraNewsletter(t, a) {
    var o, i = `https://castropil.myvtex.com/api/dataentities/CL/documents`, n = {
        email: t
    }, l = $.extend(n, a);
    return $.ajax({
        headers: {
            Accept: "application/vnd.vtex.ds.v10+json",
            "Content-Type": "application/json"
        },	
        url: i,
        async: !0,
        crossDomain: !0,
        type: "PUT",
        data: JSON.stringify(l)
    }).success(function(e) {
        o = e,
        alert('Inscrição realizada com sucesso!')
    }).fail(function(e) {
        o = e,
        alert('Inscrição realizada com sucesso!')
    }),
    o
}
