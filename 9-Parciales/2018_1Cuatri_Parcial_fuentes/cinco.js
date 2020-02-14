function mostrar() {
  var planetaDelSistemaSolar;
  planetaDelSistemaSolar = prompt("ingrese de un planeta del sistema solar");

  switch (planetaDelSistemaSolar.toLowerCase()) {
    case "Tierra".toLowerCase():
      alert("Acá vivimos");
      break;
    case "Mercurio".toLowerCase():
    case "Venus".toLowerCase():
      alert("Acá hace más calor");
      break;
    case "Neptuno".toLowerCase():
    case "Saturno".toLowerCase():
    case "Jupiter".toLowerCase():
    case "Uranio".toLowerCase():
      alert("Acá hace más frio");
      break;
    default:
      alert("Imforme un planeta valido");
  }
}
