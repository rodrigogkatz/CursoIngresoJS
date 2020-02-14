function mostrar() {
var mesDelAño = document.getElementById('mes').value;
    switch(true){
        case mesDelAño == "Enero":
        case mesDelAño == "Febrero":
        case mesDelAño == "Marzo":
        case mesDelAño == "Abril":
        case mesDelAño == "Mayo":
        case mesDelAño == "Junio":
            alert("Falta para el invierno.");
            break;
        case mesDelAño == "Julio":
        case mesDelAño == "Agosto":
            alert( "Abrigate que hace frio.");
            break;
        default:
            alert("Ya pasamos el frio, ahora calor!!!.");
            break;
    }
}