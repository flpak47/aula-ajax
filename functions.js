
var nome = "Edir";


//programação funcional

var ola = function ()
{
    alert("oi turma");

    return "ok";
}

var soma = function(){
    return 2 + 2;
}


function teste(fn)
{
    return fn();
}

function imprime()
{
    var nome2 = "Pedro";
   // console.log(nome);

    function novo()
    {
        var nome2 = "João";
        console.log(nome);
    }

    novo();
}

imprime();