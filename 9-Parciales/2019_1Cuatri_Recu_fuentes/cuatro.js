/**
 * Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro el cuadrado del numero. 
Si el primero divisible por el segundo, los resto, 
de lo contrario muestro solo el resto. 
si el resto es mayor a 3(tres ) informarlo por alert.
 */

function mostrar()
{
    var numeroUno = parseInt(prompt("ingrese un numero"));
    var numeroDos = parseInt(prompt("ingrese otro numero"));

    if(numeroUno == numeroDos){
        alert("el cuadrado del primer numero es "+(numeroUno*numeroUno)+ " y el cuadrado del segundo es"+(numeroDos*numeroDos));
    }

    if((numeroUno % numeroDos)==0){
        alert("La resta de los numeros es igual a "+(numeroUno-numeroDos));
    }else{
        alert("Muestro solo el resto "+(numeroUno%numeroDos));
    }

    if(numeroUno%numeroDos>3){
        alert("Si el resto es mayor a 3 lo muestro por alert. RESTO: "+(numeroUno%numeroDos));
    }

    
}
