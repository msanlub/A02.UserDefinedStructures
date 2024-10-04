/*Ejercicio 9: Cifrado ROT13
Implementa un script que tome una cadena codificada en ROT13 como entrada y devuelva la cadena decodificada. Los caracteres no alfabéticos deben permanecer sin cambios.

Objetivos:

Aplicar estructuras de control en la manipulación de cadenas.
 */

let resultado = [];

function rot13(textoCifrado) {
    return textoCifrado.replace(/[a-zA-Z]/g, function(char) {

        const alfabeto ='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

        const index = alfabeto.indexOf(char);

        if (index === -1) {
            return char;
        }
        
        return alfabeto[index + 13];
    });
}

let textoCifrado = "Uryyb Jbeyq!";
let textoDecodificado = rot13(textoCifrado);
console.log("Texto decodificado:", textoDecodificado);