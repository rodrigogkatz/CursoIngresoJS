/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () {
    var gradosFahrenheit;
    var fahrenheitAcentigrados;
    // 32ºF -> 0ºC
    // (x °F − 32) × 5 / 9 = y°C
    
   gradosFahrenheit = parseInt(document.getElementById("Temperatura").value);
   fahrenheitAcentigrados = ((gradosFahrenheit-32)*5/9);
   alert(gradosFahrenheit +"º Fahrenheit son "+fahrenheitAcentigrados+"º Centígrados ");
}

function CentigradosFahrenheit () {
	var gradosCentigrados;
    var centigradosAfahrenheit;
    // 32ºF -> 0ºC
    // x°F= (y°C * 9 /5) +32

    gradosCentigrados = parseInt(document.getElementById("Temperatura").value);
    centigradosAfahrenheit = ((gradosCentigrados*9/5)+32);
    alert(gradosCentigrados +"º Fahrenheit son "+centigradosAfahrenheit+"º Centígrados ");
}
