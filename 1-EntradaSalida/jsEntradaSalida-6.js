/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var sumatoria;

    numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    numeroDos = parseInt(document.getElementById("numeroDos").value, 10);

    sumatoria = numeroUno + numeroDos;

    alert(`La suma es ${sumatoria}`);


}

