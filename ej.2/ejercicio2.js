/*Ejercicio 2: Función Recursiva
Implementa una función recursiva que reciba un parámetro n y repita n veces el string “bauuuba”.

Objetivos:

Comprender el concepto de recursión.
*/

const BAUBA = "bauuuba";
let n;

do{
    n = prompt("Di un número de veces a repetir la palabra mágica: ");
} while (isNaN(n) || n === null || n < 0 || Number.isInteger());

n = +n;

function recursiva (n) {
    if (n > 0) {
        console.log(BAUBA); 
        recursiva(n - 1);   
    }
}

recursiva(n);