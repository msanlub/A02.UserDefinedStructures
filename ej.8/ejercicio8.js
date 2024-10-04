/*Ejercicio 8: Gestión de Datos con Objetos
Crea una clase Estudiante que contenga propiedades como nombre, edad, y notas. Incluye métodos para 
agregar una nota, calcular el promedio y determinar si ha aprobado. Crea un objeto Estudiante y utiliza 
sus métodos para realizar pruebas.

Objetivos:

Manipular objetos y crear métodos de gestión de datos.
*/

class Estudiante {
    constructor (nombre,edad,notas){
        this.nombre = nombre,
        this.edad = edad,
        this.notas = notas;
    }

    agregarNota(nota){
        this.notas.push(nota)
    }

    calcularPromedio(){
        const sumaNotas = this.notas.reduce((sumatorio,nota) => sumatorio + nota,0);
        const promedio = sumaNotas / this.notas.length;
        return promedio;
    }

    comprobarAprobado(){
        const resultadoMedia = this.calcularPromedio();
        if (resultadoMedia >= 5){
            return true
        }
    }
}


const estudiantes = new Estudiante("Marta",32,[5,10,2,7,8]);
const aniadirNota = estudiantes.agregarNota(9);
const promedio = estudiantes.calcularPromedio();

if (estudiantes.comprobarAprobado()){
    console.log("APTO")
}else{
    console.log("NO APTO")
}