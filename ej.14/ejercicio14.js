/**
 * Ejercicio 14: Años Bisiestos
Implementa una función isLeapYear() que acepte dos años entre 2001 y 2500 y muestre todos los años bisiestos en ese rango. Incluye validaciones para las entradas.

Objetivos:

Practicar la lógica condicional y el manejo de datos en arrays.
 */

function ingresarAños() {
    let primerAño;
    let segundoAño;

    do {
        primerAño = parseInt(prompt("Indica un año entre 2001 y 2500: "));
        segundoAño = parseInt(prompt("Indica otro año entre 2001 y 2500: "));  
    }while (isNaN(primerAño) || primerAño < 2001 || primerAño > 2500 || !Number.isInteger(primerAño) ||
    isNaN(segundoAño) || segundoAño < 2001 || segundoAño > 2500 || !Number.isInteger(segundoAño));

    return [primerAño,segundoAño];
}


function isLeapYear(primerAño,segundoAño) {
    let añosBisiestos = [];

    if (primerAño > segundoAño) {
        [primerAño, segundoAño] = [segundoAño, primerAño];
    }

    for (let año = primerAño; año <= segundoAño; año++){
        if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)){
            añosBisiestos.push(año)
        }
    }

    return añosBisiestos;
}

function mostrarResultado() {
    const [primerAño, segundoAño] = ingresarAños(); 
    const bisiestos = isLeapYear(primerAño, segundoAño); 

    if (bisiestos.length > 0) {
        console.log(`Los años bisiestos entre ${primerAño} y ${segundoAño} son: ${bisiestos}`);
    } else {
        console.log(`No hay años bisiestos entre ${primerAño} y ${segundoAño}.`);
    }
}

mostrarResultado();
