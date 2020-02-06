function mostrar() {
  var numeroAleatorio;
  //como no existe una nota mayor a 10 se contempla que la nota llegue a 9.9 como max
  numeroAleatorio = Math.random() * (10 - 1) + 1;
	
  //console.log(numeroAleatorio); //-> con esto puedo imprimir en consola el numeroAleatorio y checkear que realmente este funcionando
  if (numeroAleatorio >= 9) {
    //"EXCELENTE" para notas igual a 9 o 10
	alert("EXCELENTE");
  } else if (numeroAleatorio < 9 && numeroAleatorio >= 4) {
    //"APROBÓ" para notas mayores a 4
    alert("APROBÓ");
  } else if (numeroAleatorio < 4) {
    //"Vamos, la proxima se puede" para notas menores a 4
    alert("Vamos, la proxima se puede");
  }
}
