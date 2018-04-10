
var nome = "Fabio"; //String
var idade = 23; // int -> Number
var peso = 43.9; // float -> Number
var acordado = true; // bool


if (acordado == true) {
	console.log("sim");
} else {
	console.log("não");
}

function imprimirNome() 
{
	var input = document.getElementById("nome");
	var h2 = document.getElementById("exibir");
	h2.innerHTML = input.value.toUpperCase();

}

function primeiraLetra() 
{
	var input = document.getElementById("nome");
	var h2 = document.getElementById("exibir");
	var original = input.value.toLowerCase();
	var primeiraLetra = original.charAt(0).toUpperCase();
	
	h2.innerHTML = primeiraLetra + original.slice(1);
	
}


