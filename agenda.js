    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var lista = document.getElementById("lista");

function gravar()
{
    var div = document.getElementById("msg-erro");
    div.style.display = "none";

    if (nome.value == "" || nome.value.length < 3){
        exibeErro("Campo nome é obrigatório!");
        nome.focus();
        return;
    }  

    var regex = /^\([0-9]+\)[0-9]{4}\-[0-9]{4}$/gm;

    if (regex.exec(telefone.value) == null){
        exibeErro("Campo telefone é obrigatório!");
        telefone.focus();
        return;
    } 

    if (email.value == ""){
        exibeErro("Campo email é obrigatório!");
        email.focus();
        return;
    } 

    var novo = '<tr>'
                + '<td>'+ nome.value +'</td>'
                + '<td>'+ telefone.value +'</td>'
                + '<td>'+ email.value +'</td>'
                + '</tr>'

    lista.innerHTML += novo;

}

function exibeErro(msg)
{
    var div = document.getElementById("msg-erro");
    div.innerHTML = msg;
    div.style.display = "block";
}



function pegar()
{
    var dados = [
        {
        nome: "Fabio",
        telefone: "9999-5555",
        email: "fabio@fabio.com"
        },
        {
            nome: "Fabio",
            telefone: "9999-5555",
            email: "fabio@fabio.com"
        }
    ];

    var lista = document.getElementById("lista");

    for (var i = 0; i < dados.length; i++)
    {
        var novo = '<tr>'
        + '<td>'+ dados[i].nome +'</td>'
        + '<td>'+ dados[i].telefone +'</td>'
        + '<td>'+ dados[i].email +'</td>'
        + '</tr>'

        lista.innerHTML += novo;
    }


}
