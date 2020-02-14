/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio () {
    var cantidadDeLamparitas;
    var precioDeLamparita;
    var marcaDeLaLamparitaSeleccionada;
    
    cantidadDeLamparitas = parseInt(document.getElementById("Cantidad").value);
    marcaDeLaLamparitaSeleccionada = document.getElementById("Marca").value;
    precioDeLamparita = 35;

    switch(true){
        case cantidadDeLamparitas >= 6:
            // A descuento 50%
            // Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
            var importe;
            var importeTotalConDescuento;
            var importeConDescuentoEingresosBrutos;

            importe = cantidadDeLamparitas*precioDeLamparita;
            importeTotalConDescuento = Math.floor(importe*0.5).toFixed(2);

            if(importeTotalConDescuento>120){
                importeConDescuentoEingresosBrutos = importeTotalConDescuento*1.1;
                alert("Usted pago "+ (importeConDescuentoEingresosBrutos-importeTotalConDescuento) +" de IIBB siendo"+ importeConDescuentoEingresosBrutos);
            } else {
                alert("Usted debe pagar "+ importeTotalConDescuento);
            }
            break;
        case cantidadDeLamparitas === 5:
            // B descuento "ArgentinaLuz" se hace un descuento del 40 y si es de otra marca el descuento es del 30%
            // Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos

            if()
            break;
        case cantidadDeLamparitas === 4:
            // C 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%
            // Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
            break;
        case cantidadDeLamparitas === 3:
            // D 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
            // Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
            break;
    }
 	
}
