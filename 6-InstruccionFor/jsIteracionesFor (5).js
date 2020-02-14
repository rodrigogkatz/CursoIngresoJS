function mostrar() {
  var numero = prompt("ingrese un numero");

  if (numero != 9) {
    for (var i = 0; numero; i++) {
      var numero = prompt("ingrese un numero");
      if (numero == 9){
          break;
      }
    }
  }
} //FIN DE LA FUNCIÓN
