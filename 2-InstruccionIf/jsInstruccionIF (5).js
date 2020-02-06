function mostrar() {
  //tomo la edad
  var edad;

  edad = document.getElementById("edad").value;

  if (edad < 13) {
    alert("la persona es menor");
  } else if (edad >= 13 && edad <= 17) {
    alert("la persona es adolescente");
  } else if (edad > 17) {
    alert("la persona es mayor");
  }
} //FIN DE LA FUNCIÓN
