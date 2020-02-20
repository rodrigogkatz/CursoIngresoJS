function mostrar() {
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta.toLowerCase() == 'si'.toLowerCase()){
		var numero = parseInt(prompt("Ingrese un numero"));
		acumulador += numero;
		document.getElementById('suma').value = acumulador;
		contador++;
		var pregunta = prompt("desea continuar?");
		if(pregunta && pregunta != "si".toLowerCase()){
			respuesta = "no".toLowerCase();
		}
	}
	document.getElementById('promedio').value = acumulador/contador;
}