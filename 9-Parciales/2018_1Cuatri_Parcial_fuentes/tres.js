function mostrar() {
  var precio;
  var porcentajeDeDescuento;
  var precioFinal;

  precio = prompt("ingrese el precio");
  porcentajeDeDescuento = prompt("ingrese el porcentaje de descuento");

  precioFinal =
    parseInt(precio) +
    (parseInt(precio) * parseInt(porcentajeDeDescuento)) / 100;

  document.getElementById("elPrecioFinal").value = precioFinal;
}
