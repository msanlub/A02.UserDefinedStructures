/*Ejercicio 4: Matrices y Aplanado
Dada una matriz bidimensional de enteros, crea una función que:

Aplane la matriz sin utilizar Array.flat().
Calcule el promedio de los elementos de la matriz.

Objetivos:

Manipular matrices y realizar operaciones agregadas.
*/

let matriz1 = [13,2,32,4,15];
let matriz2 = [6,77,2,9,21];

function Aplanado(matriz1,matriz2){
    const arrayCompleta = [...matriz1,...matriz2];
    return arrayCompleta;
}

let nuevaArray = Aplanado(matriz1,matriz2)

function promedio(nuevaArray){
    let sumatorio = 0;

    nuevaArray.forEach(numero => {
        sumatorio += numero
    });

    let resultado = sumatorio / nuevaArray.length

    return resultado;
}

let promedioArray = promedio(nuevaArray);

console.log(`El promedio de ${nuevaArray} es ${promedioArray}`);