/**
 * Ejercicio 15: Depuración y Documentación
Toma uno de los ejercicios anteriores y añade comentarios explicativos en cada parte del código. Realiza pruebas en diferentes escenarios y documenta si el comportamiento es el esperado.

Objetivos:

Reforzar la importancia de la depuración y la documentación del código.
*/

/**
 * @returns valor de primer año y segundo año, comprobando que sean números enteros entre los parametros establecidos
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

/**
 * @param {Number,int} primerAño, introducido por usuario
 * @param {Number, int} segundoAño, introducito por usuario
 * @returns array de años bisiestos
 */
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

/**
 * @returns imprime en consola si hay años bisiestos (y cuales) entre los años indicados o no 
 */
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
