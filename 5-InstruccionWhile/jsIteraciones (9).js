function mostrar(){
	var contador=0;
	var acumulador=0;
	var comparacion;
	// declarar variables
	var numero = 0;
	var respuesta='si';
	var continuar;
	do{
		numero =parseInt(prompt("Ingrese un numero"));
		//primera vez que un usuario ingresa un numero, asi que es maximo y minimo a la vez
		if(contador == 0){
			numMax = numero;
			numMin = numero;
		} else {
			if (numero > numMax){
				numMax = numero;
			}
			if (numero < numMin){
				numMin = numero;
			}
		}
		continuar = prompt("desea seguir?");
		contador++;
	} while (continuar=="si");
	document.getElementById("maximo").value = numMax;
	document.getElementById("minimo").value = nunMin;	
}

//isNan evalua si una cadena puede ser convertida a numero: funciona con "asd"//->retorna true
//isNan "123"//->retorna false porque puede ser convertido a numero