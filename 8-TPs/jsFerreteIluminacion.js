/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

//una funcion que me devuelva el porcentaje de descuento
// 5 y ArgentinaLuz -> 50%

function CalcularPrecio () {
    var cantidadDeLamparas;
    var importeTotalConDescuento;
    var importeConDescuentoEingresosBrutos;

    cantidadDeLamparas = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    if(cantidadDeLamparas>=6){
        pasoCantidadLamparasYlasMarcas(cantidadDeLamparas, "");
    } else {
        switch(cantidadDeLamparas){
            case 5:
                pasoCantidadLamparasYlasMarcas(cantidadDeLamparas, marca);
                break;
            case 4:
                pasoCantidadLamparasYlasMarcas(cantidadDeLamparas, marca);
                break;
            case 3:    
                pasoCantidadLamparasYlasMarcas(cantidadDeLamparas, marca);
                break;
        }
 	}
}

function pasoCantidadLamparasYlasMarcas(cantidadDeLamparas,marca){
    if(cantidadDeLamparas==6 && marca==""){
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.5);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    } 
    if (cantidadDeLamparas==5 && marca =="ArgentinaLuz"){
        //0.40
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.4);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
    if (cantidadDeLamparas==5 && marca !="ArgentinaLuz"){
        //0.30
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.3);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
    if (cantidadDeLamparas==4 && marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
        //0.25
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.25);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
    if (cantidadDeLamparas==4 && marca !="ArgentinaLuz" && marca !="FelipeLamparas"){
        //0.20
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.2);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
    if (cantidadDeLamparas==3 && marca =="ArgentinaLuz"){
        //0.15
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.15);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
    if (cantidadDeLamparas==3 && marca =="FelipeLamparas"){
        //0.1
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.1);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
    if (cantidadDeLamparas==3 && marca !="ArgentinaLuz" && marca !="FelipeLamparas"){
        //0.05
        importeTotalConDescuento = obtenerImporteTotalConDescuento(cantidadDeLamparas,0.05);
        calcularImporteTotalConDescuento(importeTotalConDescuento);
    }
}

function calcularImporteTotalConDescuento(importeTotalConDescuento){
    if(importeTotalConDescuento>120){
        importeConDescuentoEingresosBrutos = importeTotalConDescuento*1.1;
        alert("Usted pago "+ (importeConDescuentoEingresosBrutos-importeTotalConDescuento) +" de IIBB siendo"+ importeConDescuentoEingresosBrutos + " el pago total");
    } else {
        alert("Usted debe pagar "+ importeTotalConDescuento);
    }
}

function obtenerImporteTotalConDescuento(cantidad, descuento){
    var importe;
    importe = cantidad*35;
    if(cantidad>=6){
        return Math.floor(importe*descuento);
    } else {
        return Math.floor(importe-(importe*descuento));
    }
}