function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(true){
        case mesDelAño == "Enero":
        case mesDelAño == "Marzo":
        case mesDelAño == "Mayo":
        case mesDelAño == "Julio":
        case mesDelAño == "Septiembre":
        case mesDelAño == "Noviembre":
            alert("Tiene 31 dias");
            break;
        case mesDelAño == "Febrero":
            alert("Tiene 28 dias");
            break;
        default:
            alert("Tiene 30 dias");
            break;
    }


}//FIN DE LA FUNCIÓN