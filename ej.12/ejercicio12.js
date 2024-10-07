/*Ejercicio 12: Números Pares en un Rango
Implementa una función findPairs() que acepte dos números entre 1 y 100 y calcule todos los números pares en ese rango. Incluye validaciones para las entradas y muestra los resultados.

Objetivos:

Trabajar con validaciones y manipulaciones de arrays.
*/

function inputParameter() {

    let number1;
    let number2;

    do {
        number1 = parseInt(prompt ("Indica el primer número del 1-100: "));
        number2 = parseInt(prompt ("Indica el segundo número del 1-100: "));

    } while (
        isNaN(number1) || isNaN(number2) || number1 < 1 || number1 > 100 || number2 < 1 || number2 > 100
    );

    return [number1,number2];
}


function findPairs(number1,number2) {

    let pares = []; 
    let min = Math.min(number1, number2);
    let max = Math.max(number1, number2);

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    return pares;
}


let [num1, num2] = inputParameter();
let paresEncontrados = findPairs(num1, num2);
console.log(`Números pares entre ${num1} y ${num2}: ${paresEncontrados.join(", ")}`);
