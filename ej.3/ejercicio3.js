/*Ejercicio 3: Arrays y Operaciones Agregadas
Crea un array que contenga al menos cinco números e implementa operaciones de filtrado, reducción y recolección.

Objetivos:

Trabajar con arrays y comprender operaciones agregadas.
*/

let numeros = [1,2,3,4,5];
console.log(numeros);

const recoleccion = numeros.filter((numero) => numero > 2);
console.log(recoleccion);

const reduccion = numeros.reduce((total,numero) =>  total + numero, 0)
console.log(reduccion);

const filtrado = numeros.some((numero) => numero < 1);
console.log(filtrado);