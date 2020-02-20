function mostrar() {
  do {
	var numero = prompt("ingrese un número entre 0 y 10.");
	document.getElementById("Numero").value = parseInt(numero);
  } while (numero == '' || numero > 9 || numero < 0);
}
