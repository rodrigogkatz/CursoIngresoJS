function mostrar() {
    var notaDelAlumno1 = prompt("ingrese la nota del alumno 1");
    var notaDelAlumno2 = prompt("ingrese la nota del alumno 2");
    var notaDelAlumno3 = prompt("ingrese la nota del alumno 3");
    var notaDelAlumno4 = prompt("ingrese la nota del alumno 4");
    var notaDelAlumno5 = prompt("ingrese la nota del alumno 5");
    var arrayDeNotas;
    arrayDeNotas = [];


    /*
    var sexoDelAlumno1 = prompt("ingrese el sexo del alumno 1");
    var sexoDelAlumno2 = prompt("ingrese el sexo del alumno 2");
    var sexoDelAlumno3 = prompt("ingrese el sexo del alumno 3");
    var sexoDelAlumno4 = prompt("ingrese el sexo del alumno 4");
    var sexoDelAlumno5 = prompt("ingrese el sexo del alumno 5");
    var arrayDeSexo;
    arrayDeSexo = [];
    */
 
    arrayDeNotas.push(parseInt(notaDelAlumno1),parseInt(notaDelAlumno2),parseInt(notaDelAlumno3),parseInt(notaDelAlumno4),parseInt(notaDelAlumno5));
    //arrayDeSexo.push(parseInt(sexoDelAlumno1),parseInt(sexoDelAlumno2),parseInt(sexoDelAlumno3),parseInt(sexoDelAlumno4),parseInt(sexoDelAlumno5));

    suma = (arrayDeNotas[0]+arrayDeNotas[1]+arrayDeNotas[2]+arrayDeNotas[3]+arrayDeNotas[4]);
    promedio = suma/arrayDeNotas.length;
        
    alert("el promedio de las nota es "+ promedio);


    for(var i = 0; i<arrayDeNotas.length; i++){
        if(arrayDeNotas[i]<0 || arrayDeNotas[i]>10){
            alert("la nota del alumno " + i + " no es valida");
        } else {
            
        }
    }
/**
 *  console.log(arrayDeSexo);
 *  console.log(arrayDeNotas);
 */

   
}


/**
 * Bienvenidos.
 * Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 *  el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
 * 
 * 
 * a) El promedio de las notas totales.
 * b) La nota más baja y el sexo de esa persona.
 * c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */