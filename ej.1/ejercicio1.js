/**
 * Ejercicio 1: Funciones Predefinidas y Definición de Funciones
Crea una función que reciba dos números como parámetros y devuelve su suma. Investiga y utiliza al menos 
tres funciones predefinidas del lenguaje (por ejemplo, Math.random(), parseInt(), toFixed()).

Objetivos:
Practicar la definición y llamada de funciones.
Familiarizarse con funciones predefinidas.
 */

let numero1 = (Math.random() * 100).toFixed(2);
let numero2 = (Math.random() * 100).toFixed(2);

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

function suma(numero1,numero2){
    let resultado = numero1 + numero2;
    return resultado.toFixed(2);
}

let sum = suma(numero1,numero2);

console.log(`${numero1} + ${numero2} = ${sum}`);