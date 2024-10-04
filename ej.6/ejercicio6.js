/*Ejercicio 6: Filtrado y Transformación de Datos
Crea una función filtrarYTransformar() que reciba un array de números y devuelva un nuevo array que contenga 
solo los números impares, multiplicados por 2. Utiliza filter() y map().

Objetivos:

Practicar el uso de métodos de arrays como filter() y map().
Mejorar la validación de entradas.
*/

let numeros = [23, 13, 64, 31, 15, 7];

function validarArray(numeros) {
    return Array.isArray(numeros) && numeros.every(numero => typeof numero === 'number' && !isNaN(numero));
}

function filtrarYTransformar(numeros) {
    if (validarArray(numeros)) {
        let impares = numeros.filter(numero => numero % 3 !== 0);
        let dobleImpares = impares.map(impar => impar * 2);
        return dobleImpares;
    } else {
        return "El array no es válido o contiene elementos que no son números";
    }
}

console.log(filtrarYTransformar(numeros));