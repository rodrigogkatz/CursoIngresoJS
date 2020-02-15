function mostrar() {
  do {
	var numero = prompt("ingrese un número entre 0 y 10.");
	document.getElementById("Numero").value = numero;
  } while (numero > 9 || numero < 0);
}
