/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    var numeroUno;
    var numeroDos;
    var resta;

    numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    numeroDos = parseInt(document.getElementById("numeroDos").value, 10);

    resta = numeroUno - numeroDos;

    alert(`La resta es ${resta}`);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var producto;

    numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    numeroDos = parseInt(document.getElementById("numeroDos").value, 10);

    producto = numeroUno * numeroDos;

    alert(`El producto es ${producto}`);
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var division;

    numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    numeroDos = parseInt(document.getElementById("numeroDos").value, 10);

    division = numeroUno / numeroDos;

    alert(`La division es ${division}`);
}

