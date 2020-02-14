function mostrar() {
  var laHora;
  laHora = parseInt(document.getElementById("laHora").value);
  console.log(laHora);

  //true es comparado con el valor de las distintas condiciones
  switch (true) {
    case laHora >= 6 && laHora <= 11:
      alert("es de mañana");
      break;
    case laHora >= 12 && laHora <= 19:
      alert("es de tarde");
      break;
    case (laHora <= 5 || laHora >= 20) && laHora < 25:
      alert("es de noche");
      if (laHora < 24) {
        alert("a dormir");
      }
      break;
    default:
      alert("la hora no es válida");
      break;
  }
}
/**
 * Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
 */
