function mostrar() {
  /**
   * usted es xxxxx y vive en la localidad de xxxxxxxx
   */

  var laLocalidad;
  var elNombre;

  elNombre = document.getElementById("elNombre").value;
  laLocalidad = document.getElementById("laLocalidad").value;

  alert(`usted es ${elNombre} y vive en la localidad de ${laLocalidad}`);
}
