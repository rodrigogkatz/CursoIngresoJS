function mostrar() {
  do {
    var sexo = prompt("ingrese f ó m");
    document.getElementById("Sexo").value = sexo;
  } while (sexo !== "m" || sexo !== "f");
}