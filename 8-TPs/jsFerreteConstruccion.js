/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 
	2 bolsas de cemento y 3 de cal, 
	debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
	var values;
	values = getValues();
	if(!values[2]){
		var perimetroDelRectangulo;
		perimetroDelRectangulo = calcularPerimetroDeRectangulo(values[0], values[1]);
		alert("Para alambrar el rectangulo se necesitan 3 hilos de " + perimetroCubiertoPorTresAlambres);
		return perimetroCubiertoPorTresAlambres;
	} else {
		alert("El rectangulo no tiene radio...");
	}
}

function Circulo () {
	var values;
	values = getValues();
	if(!values[0] || !values[1]){
		var circunferenciaDelCirculo;
		circunferenciaDelCirculo = calcularCircunferenciaDeCirculo(values[2]);
		alert("Para alambrar la circunferencia se necesitan 3 hilos de " + circunferenciaDelCirculo);
	} else {
		alert("Para calcular la circunferencia no necesitamos los datos del rectangulo");
	} 
}

function Materiales () {
	var values;
	var perimetroDelRectangulo;
	var circunferenciaDelCirculo;
	values = getValues();
	circunferenciaDelCirculo = calcularCircunferenciaDeCirculo(values[2]);
	perimetroDelRectangulo = calcularPerimetroDeRectangulo(values[0], values[1]);
		if (!circunferenciaDelCirculo) {
		var bolsasTotalesDeCemento = calcularBolsasTotalesDeCemento(perimetroDelRectangulo);
		var bolsasTotalesDeCal = calcularBolsasTotalesDeCal(perimetroDelRectangulo);
		alert("Se necesitan " +Math.round(bolsasTotalesDeCemento, -2)+ " bolsas de cemento y " +Math.ceil(bolsasTotalesDeCal, -2)+ " bolsas de cal para "+Math.ceil(perimetroDelRectangulo, -2)+ " metros cuadrados para el Rectangulo");
	} else if (!perimetroDelRectangulo){
		var bolsasTotalesDeCemento = calcularBolsasTotalesDeCemento(circunferenciaDelCirculo);
		var bolsasTotalesDeCal = calcularBolsasTotalesDeCal(circunferenciaDelCirculo);
		alert("Se necesitan " +Math.round(bolsasTotalesDeCemento, -2)+ " bolsas de cemento y " +Math.ceil(bolsasTotalesDeCal, -2)+ " bolsas de cal para "+Math.ceil(circunferenciaDelCirculo, -2)+ " metros cuadrados pra el Circulo");
	} else {
		alert("Calcule los materiales exclusivamente para el rectangulo o para el circulo");
	}
}

function getValues() {
	var array;
    array = [];
    array.push(getValueById("Largo"),getValueById("Ancho"),getValueById("Radio"));
    console.log(array);
    return array;
}

function getValueById(id) {
	return parseInt(document.getElementById(id).value);
}

function calcularPerimetroDeRectangulo(base, altura){
	var perimetro;
	var perimetroCubiertoPorTresAlambres;
	perimetro = 2*(base+altura);
	perimetroCubiertoPorTresAlambres = perimetro/3;
	return perimetroCubiertoPorTresAlambres;
}

function calcularCircunferenciaDeCirculo(radio){
	var circunferencia;
	var circunferenciaCubiertaPorTresAlambres;
	circunferencia = 2*3.14*radio;
	circunferenciaCubiertaPorTresAlambres = circunferencia/3;
	return circunferenciaCubiertaPorTresAlambres;
}

function calcularBolsasTotalesDeCemento(superficie){
	var metro = 1;
	var bolsasDeCementoPorMetro = 2;
	return (superficie*bolsasDeCementoPorMetro)/metro;
}

function calcularBolsasTotalesDeCal(superficie){
	var metro = 1;
	var bolsasDeCalPorMetro = 3;
	return (superficie*bolsasDeCalPorMetro)/metro;
}