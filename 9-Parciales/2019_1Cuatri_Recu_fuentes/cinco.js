/**
 * 
 * 
 * 
Bienvenidos (SOLO SWITCH). 
Una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de días , la oferta dice que por día se cobra $100 , 
que se puede pagar de todas las maneras 

Si es América tiene un 15% de descuento y si ademas paga por débito 
se le agrega un 10% mas de descuento 

Si es África u Oceania tiene un 30% de descuento y si además paga por 
mercadoPago o efectivo se le agrega un 15% mas de descuento 

Si es Europa tiene un 20% de descuento y si ademas paga por débito se 
e agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 

cualquier otro continente tiene un recargo del 20% 
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque * 
 * 
 * 
 */

function mostrar()
{
    var importePorDia = 100;
    var importeSinDescuento = 0;
    var importeConDescuento = 0;
    var importeConRecargo = 0;
    var importedescuentoPorFormaDePago = 0;

    var queContinenteQuiereVisitar = prompt("ingresar que continente le gustaria visitar");
    var cantidadDeDias = prompt("cantidad de días");
    var formaDePago = prompt("forma de pago");


    //100%  - 100
    //15%   - ?
    switch(queContinenteQuiereVisitar){
        case 'America':
            importeSinDescuento = cantidadDeDias*importePorDia;
            importeConDescuento = importeSinDescuento - (importeSinDescuento*0.30);
            if(formaDePago=="debito"){
                importedescuentoPorFormaDePago = importeConDescuento - (importeConDescuento*0.10);
            }
            break;
        case 'Africa':
        case 'Oceania': 
            importeSinDescuento = cantidadDeDias*importePorDia;
            importeConDescuento = importeSinDescuento - (importeSinDescuento*0.15);
            if(formaDePago=="debito"){
                importedescuentoPorFormaDePago = importeConDescuento - (importeConDescuento*0.10);
            }
            break;
        case 'Europa': 
            importeSinDescuento = cantidadDeDias*importePorDia;
            importeConDescuento = importeSinDescuento - (importeSinDescuento*0.20);
            if(formaDePago=="debito"){
                importedescuentoPorFormaDePago = importeConDescuento - (importeConDescuento*0.15);
            } else if(formaDePago=="mercadoPago"){
                importedescuentoPorFormaDePago = importeConDescuento - (importeConDescuento*0.10);
            } else {
                importedescuentoPorFormaDePago = importeConDescuento - (importeConDescuento*0.05);
            }
            break;
        default: 
            //cualquier otro continente tiene un recargo del 20% 
            //en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque *
            if(formaDePago != "cheque"){
                importeSinDescuento = cantidadDeDias*importePorDia;
                importeConRecargo = importeSinDescuento + (importeSinDescuento*0.20);
            } else {
                importeSinDescuento = cantidadDeDias*importePorDia;
                importeConRecargo = importeSinDescuento + (importeSinDescuento*0.20);
                importeConRecargoMasImpuesto = importeConRecargo +(importeConRecargo*0.15);
            }
            break;
    }
}
