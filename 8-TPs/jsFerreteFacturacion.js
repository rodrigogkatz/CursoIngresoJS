/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () {
	console.log("calculando la suma...");
	var values = getValues();
	alert(values[0]+values[1]+values[2]);
}

function Promedio () {
	console.log("calculando el promedio...");
	var values = getValues();
	alert((values[0]+values[1]+values[2])/values.length);
}

function PrecioFinal () {
	console.log("calculando el precio final...");
	var values = getValues();
	var sumatoria;
	sumatoria = values[0]+values[1]+values[2]
	alert(sumatoria*1.21);
}


function getValues() {
	var array;
    array = [];
    array.push(getValueById("PrecioUno"),getValueById("PrecioDos"),getValueById("PrecioTres"));
   
    console.log(array);
    return array;
}

function getValueById(id){
	return parseInt(document.getElementById(id).value)
}