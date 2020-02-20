function mostrar() {
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	while(respuesta.toLowerCase() == 'si'.toLowerCase()){
		var numero = parseInt(prompt("Ingrese un numero"));
		if (numero>0){
			positivo += numero;
			document.getElementById('suma').value = positivo;
		}
		if (numero>0){
			negativo *= numero;
			document.getElementById('producto').value = negativo;
		}
		contador++;
		var pregunta = prompt("desea continuar?");
		if(pregunta && pregunta.toLowerCase() != "si".toLowerCase()){
			respuesta = "no".toLowerCase();
		}
	}
}