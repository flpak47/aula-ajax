// comentario de linha
/*
multiplas linhas
*/

var cidade = "Curitiba";

var cidades = ["Curitiba", "Pinhais", "Colombo"];

cidades.push("Araucária");

console.log(cidades[1]);

var ini = 0 // valor inicial
var ult = cidades.length - 1; // valor final

while (ini <= ult) 
{
	console.log(cidades[ini]);

	ini += 1; // valor do incremento ou ini++
}

var ult = cidades.length - 1;

for (var ini = 0; ini <= ult; ini = ini + 1) 
{
	console.log(cidades[ini]);
}


var ult = 0;

for (var ini = cidades.length - 1; ini >= ult; ini = ini - 1)
{
	console.log(cidades[ini]);
}