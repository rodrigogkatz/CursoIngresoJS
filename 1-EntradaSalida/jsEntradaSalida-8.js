/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
    var numeroDos;
    var restoDeLaDivision;

    numeroUno = parseInt(document.getElementById("numeroDividendo").value);
    numeroDos = parseInt(document.getElementById("numeroDivisor").value);

    restoDeLaDivision = numeroUno % numeroDos;

    alert(`El resto es ${restoDeLaDivision}`);
}
