function CalcularPrecio () {
    var cantidadDeLamparas = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    if(cantidadDeLamparas>=6 && marca!=""){
        obtenerImporteTotalConDescuento(cantidadDeLamparas,0.5);
    }
    switch(cantidadDeLamparas){
        case 5:
            if (marca =="ArgentinaLuz"){     
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.4);
            } else if (marca != "ArgentinaLuz" && marca != ""){	        
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.3);
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca =="FelipeLamparas"){
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.25);	        
            } else if (marca != "ArgentinaLuz" || marca !="FelipeLamparas"){
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.2);	        
            } 
            break;
        case 3:
            if (marca == "ArgentinaLuz"){
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.15);
            } else if (marca == "FelipeLamparas"){
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.1);
            } else (marca != "ArgentinaLuz" || marca !="FelipeLamparas");{
                obtenerImporteTotalConDescuento(cantidadDeLamparas, 0.05);
            }
            break;
    }
}

function obtenerImporteTotalConDescuento(cantidad, descuento){
    var importe = cantidad*35;
    if(cantidad){
        var importeTotalConDescuento = Math.floor(importe-(importe*descuento));
        document.getElementById("precioDescuento").value = importeTotalConDescuento;
    }
    if(importeTotalConDescuento>120){
        var importeConDescuentoEingresosBrutos = importeTotalConDescuento*1.1;
        alert("Usted pago "+ (importeConDescuentoEingresosBrutos-importeTotalConDescuento) +" de IIBB siendo"+ importeConDescuentoEingresosBrutos + " el pago total");
    } else {
        alert("Usted debe pagar "+ importeTotalConDescuento);
    }   
}