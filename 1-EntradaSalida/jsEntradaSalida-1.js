/**
 * para la gestion de un hotel ingresar los datos validados de una reserva 
	1-nombre del huesped 
	2-cantidad de personas
	3-cantidad de dias de estadia
	4-forma de pago(efectivo, tarjeta o qr)

	a- rodrigo, cp 4 d8, efectivo
	b- maria, cp 5, d9, tarjeta
	c- pepe, cp 3, d10, tarjeta

	informar 
	1-el huesped que trajo mas personas en una sola reserva
	2-cantidad de personas que se quedaron mas dias.
	3-la forma de pago mas utilizada
	4-el promedio de cantidad de dias por reserva


	usar un while para validar cada uno de los datos
	if o switch
	mostrar por document.write
 */
function mostrarSabado29() {

	var contadorDeIteracionesHuespedes = 0;
	var contadorDeIteracionesDias = 0;
	var contadorDeFormaDePago = 0;
	var contadorPagoEfectivo = 0;
	var contadorPagoTarjeta = 0;
	var contadorPagoQr = 0;
	var contadorParaPromedio = 0;

	var cantMinHuespedes = 0;
	var cantMaxHuespedes = 0;
	var huespedQueTrajoMasPersonas = '';
	
	var maxDias = 0;
	var minDias = 0;
	var cantDePersonasQueSeQuedaronMasDias = 0;

	var minFormaDePago;
	var maxFormaDePago;
	var formaDePago = '';

	var promedioCantidadDiasDeReserva = 0;

	var respuesta = 'si';

	while(respuesta.toLowerCase() == "si".toLowerCase()){

		var nombreHuesped = prompt("ingrese el nombre del huesped");
		var cantidadDePersonasAhospedarse = parseInt(prompt("ingrese la cantidad de personas"));
		var diasTotalesDeEstadia = parseInt(prompt("ingrese dias totales de estadia"));
		var formaDePago = prompt("ingrese forma de pago");

		while(nombreHuesped=='' || nombreHuesped == undefined){
			nombreHuesped = prompt("ERROR! debe ingresar el nombre del huesped");
		}

		while(isNaN(cantidadDePersonasAhospedarse) || cantidadDePersonasAhospedarse < 0 || cantidadDePersonasAhospedarse=='' || cantidadDePersonasAhospedarse == undefined){
			cantidadDePersonasAhospedarse
 = parseInt(prompt("ERROR! debe ingresar la cantidad de personas mayor a 0"));
		}

		while(isNaN(diasTotalesDeEstadia) || diasTotalesDeEstadia < 0 || diasTotalesDeEstadia=='' || diasTotalesDeEstadia == undefined){
			diasTotalesDeEstadia = parseInt(prompt("ERROR! ingrese dias de estadia. Mayor a 0"));
		}

		while(isNaN(formaDePago) && formaDePago !== "efectivo" && formaDePago!= "tarjeta" && formaDePago!= "qr"){
			formaDePago = prompt("ERROR! debe ingresar una forma de pago");
		}

		/** 
			1-el huesped que trajo mas personas en una sola reserva
			2-cantidad de personas que se quedaron mas dias.
			3-la forma de pago mas utilizada
			4-el promedio de cantidad de dias por reserva
		*/

		// cantidad de huespedes 
		if(contadorDeIteracionesHuespedes == 0){
			// cantidad de huespedes
			cantMaxHuespedes = cantidadDePersonasAhospedarse;
			cantMinHuespedes = cantidadDePersonasAhospedarse;
			contadorDeIteracionesHuespedes++;
		} else if (cantidadDePersonasAhospedarse > cantMaxHuespedes){
			// max cantidad de huespedes
			cantMaxHuespedes = cantidadDePersonasAhospedarse;
			huespedQueTrajoMasPersonas = nombreHuesped;
			contadorDeIteracionesHuespedes++;
		} else if (cantidadDePersonasAhospedarse < cantMinHuespedes){
			// min cantidad de huespedes
			cantMinHuespedes = cantidadDePersonasAhospedarse;
			contadorDeIteracionesHuespedes++;
		} 

		// cantidad de personas que se quedaron mas dias
		if(contadorDeIteracionesDias == 0){
			// cantidad de dias
			maxDias = diasTotalesDeEstadia;
			minDias = diasTotalesDeEstadia;
			contadorDeIteracionesDias++;
		} else if (diasTotalesDeEstadia > maxDias){
			// max cantidad de dias
			maxDias = diasTotalesDeEstadia;
			cantDePersonasQueSeQuedaronMasDias = cantidadDePersonasAhospedarse;
			contadorDeIteracionesDias++;
		} else if (diasTotalesDeEstadia < minDias){
			// min cantidad de dias
			minDias = diasTotalesDeEstadia;
			contadorDeIteracionesDias++;
		} 

		switch(formaDePago.toUpperCase()){
			case 'efectivo'.toUpperCase():
					contadorPagoEfectivo++;
				break;
			case 'tarjeta'.toUpperCase():
					contadorPagoTarjeta++;
				break;
			case 'qr'.toUpperCase():
					contadorPagoQr++;
				break;
		}

		if(contadorParaPromedio == 0){
			promedioCantidadDiasDeReserva = parseInt(diasTotalesDeEstadia);
			contadorParaPromedio++;
		} else if(contadorParaPromedio>0){
			contadorParaPromedio++;
			promedioCantidadDiasDeReserva = (promedioCantidadDiasDeReserva + diasTotalesDeEstadia)/contadorParaPromedio;
		}

		respuesta = prompt("Desea ingresar otro huesped?");
	}


	//c1=EFECTIVO c1> c2 y c1> c3
	if(contadorPagoEfectivo>contadorPagoQr && contadorPagoEfectivo>contadorPagoTarjeta){
		formaDePago = 'Efectivo';
	}
	//c2=TARJETA c2> c1 y c2> c3
	if(contadorPagoTarjeta>contadorPagoQr && contadorPagoTarjeta>contadorPagoEfectivo){
		formaDePago = 'Tarjeta';
	}
	//c3=QR c3> c1 y c3> c2
	if(contadorPagoQr>contadorPagoEfectivo && contadorPagoQr>contadorPagoTarjeta){
		formaDePago = 'QR';
	}

	document.write("1) El huesped que trajo mas personas en una sola reserva fue <b>"+ huespedQueTrajoMasPersonas + "</b>" +
	"<br><br>2) Cantidad de personas que se quedaron mas dias <b>"+ cantDePersonasQueSeQuedaronMasDias + "</b>" +
	"<br><br>3) La forma de pago mas utilizada <b>"+ formaDePago + "</b>" +
	"<br><br>4) El promedio de cantidad de dias por reserva <b>"+ promedioCantidadDiasDeReserva.toFixed(4)+ "</b>");

}