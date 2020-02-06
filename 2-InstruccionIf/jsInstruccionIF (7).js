function mostrar() {

  //declaraciones de varialbes
  var edad;
  var estadoCivil;
  var estadoCivilValue;

  //tomo el valor de la edad
  edad = document.getElementById("edad").value;
  //primero tomo el elemento por id
  estadoCivil = document.getElementById("estadoCivil");
  //luego pido el value seleccionado dentro del array de opciones
  estadoCivilValue = estadoCivil.options[estadoCivil.selectedIndex].value;

  if (edad < 18 && estadoCivilValue != "Soltero") {
    alert("Es muy pequeño para NO ser soltero.");
  }
} //FIN DE LA FUNCIÓN
