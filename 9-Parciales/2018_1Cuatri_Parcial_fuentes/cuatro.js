function mostrar() {
  var numeroUno = prompt("ingrese un numero");
  var numeroDos = prompt("ingrese otro numero");

  numeroUnoParse = parseInt(numeroUno);
  numeroDosParse = parseInt(numeroDos);

  if (numeroUno == numeroDos) {
    alert("concatenados " + numeroUno + numeroDos);
  }
  if (numeroUnoParse > numeroDosParse) {
    alert(numeroUnoParse - numeroDosParse);
  } else {
    var suma = numeroUnoParse + numeroDosParse;
    if (suma > 10) {
      alert("la suma es " + suma + " y supero el 10");
    }
  }
}
