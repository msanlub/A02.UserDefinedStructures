/**
 * Ejercicio 10: Días del Mes
Crea un script que pida al usuario un número entre 1 y 12 (representando los meses del año) y devuelva el número de días en el mes correspondiente. Considera que febrero tiene 28 días y los meses de abril, junio, septiembre y noviembre tienen 30.

Objetivos:

Practicar la validación de entradas y la lógica de decisiones.
*/

function pedirNumero(){
    let numeroMes = prompt("Indica un número de mes: ");
    if (validarNumero(numeroMes)){
        let dias = obtenerDiasMes(numeroMes);
        mostrarResultado(numeroMes,dias);
    }else{
        console.log("Por favor, introduce un número válido entre 1 y 12.")
    }
}

function validarNumero(numeroMes){
    numeroMes = parseInt(numeroMes);
    let numeroOk = !isNaN(numeroMes) && numeroMes > 0 && numeroMes <= 12;
    return numeroOk;
}

function obtenerDiasMes(numeroMes){
    switch(numeroMes){
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            return 31;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            return 30;
        case 2: // Febrero
            return 28; 
        default:
            return 0; 
    }
}

function mostrarResultado(numeroMes,dias){
    console.log(`Los días del mes ${numeroMes} son ${dias}`);
}

pedirNumero();