/*Ejercicio 7: Jerarquía de Clases
Define una clase Animal con propiedades como nombre y edad, y un método hablar(). Crea dos subclases:
 Perro y Gato, que hereden de Animal y sobreescriban el método hablar().

Objetivos:

Introducir la herencia en la programación orientada a objetos.
*/


class Animal {
    constructor (nombre,edad){
        this.nombre = nombre,
        this.edad = edad;
    }

    hablar(){
        return ``;
    }
}

class Perro extends Animal{
    constructor (nombre,edad){
        super(nombre,edad)
    }

    hablar(){
        return `Guau!`
    }
}

class Gato extends Animal{
    constructor (nombre,edad){
        super(nombre,edad)
    }

    hablar(){
        return `Miau!`
    }
}


const perro = new Perro("Lola",18);
const gato = new Gato("Thai",6);
console.log(perro.hablar());
console.log(gato.hablar());