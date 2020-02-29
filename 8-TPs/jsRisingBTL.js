/*RISING BTL. Empresa dedicada a la toma de datos para realizar 
estadísticas y censos nos pide realizar una carga de datos validada 
e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a 
cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados 
y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para 
nacionalizados.
 */
function ComenzarIngreso () {

    var inputEdad = parseInt(document.getElementById("Edad").value);
    var inputSexo = document.getElementById("Sexo").value;
    var inputEstadoCivil = parseInt(document.getElementById("EstadoCivil").value);
    var inputSueldo = parseFloat(document.getElementById("Sueldo").value).toFixed(4);
    var inputLegajo = document.getElementById("Legajo").value;
    var inputNacionalidad = document.getElementById("Nacionalidad").value;

    //fuerzo la primera vuelta
    var respuesta = 'si';

    while(respuesta.toLowerCase = 'si'.toLowerCase){

        var edad = parseInt(prompt("ingrese la edad"));
        var sexo = prompt("ingrese el sexo");
        var estadoCivil = prompt("ingrese el estado civil");
        var sueldoBruto = parseFloat(prompt("ingrese el sueldo bruto")).toFixed(4);
        var legajo = parseInt(prompt("ingrese el numero de legajo"), 10);
        var nacionalidad = prompt("ingrese la nacionalidad");

        while(isNaN(edad) && edad < 18 && edad > 90){
            //A.Edad, entre 18 y 90 años inclusive.
            edad = parseInt(prompt("ERROR! ingrese la edad entre 18 y 90"))
        }

        while(sexo.toUpperCase() != "si".toUpperCase() || sexo.toUpperCase() != "no".toUpperCase()){
            //B.Sexo, “M” para masculino y “F” para femenino
            sexo = prompt("ERROR! ingrese el sexo: M o F");
        }

        while(isNaN(estadoCivil) && estadoCivil < 1 || estadoCivil > 4){
            //C.Estado civil,   1-para soltero, 
            //                  2-para casados, 
            //                  3-para divorciados 
            //                  4-para viudos
            estadoCivil = prompt("ERROR! ingrese el estado civil 1, 2, 3 o 4");
        }

        while(isNaN(sueldoBruto) && sueldoBruto < 8000){
            sueldoBruto = parseFloat(prompt("ERROR! ingrese el sueldo bruto mayor o igual a 8000")).toFixed(4)
        }

        while(isNaN(legajo) && legajo > 999 && legajo < 10000){
            legajo = parseInt(prompt("ERROR! ingrese el numero de legajo de 4 cifras sin 0 a la izq"), 10);
        }

        while(){
            //A para argentinos, 
            //E para extranjeros, 
            //N para nacionalizados.
        }

        // respuesta == no, salgo del bucle
        respuesta = prompt("Desea cargar otro legajo?");
    }
    
 
}
