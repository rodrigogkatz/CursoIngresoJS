//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var mensaje;
	mensaje = "Esto funciona de maravilla";

	confirm(mensaje);
}


function malaPractica(){
	//aca funciona
	var numero = "3";
	var resultado = numero * "10000000000000000";
	alert(resultado);//-> retorna 30000000000000000

	//esta es la razon de la mala practica lo anterior
	var numero = "a";
	var resultado = numero * "10000000000000000";
	alert(resultado);//-> retorna NaN
}
