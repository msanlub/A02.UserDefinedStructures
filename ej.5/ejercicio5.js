/*Ejercicio 5: Objetos y Métodos
Define un objeto Libro con propiedades como título, autor, y paginas. Incluye un método resumen() 
que devuelva una descripción del libro. Crea un array de objetos Libro, recorrelo y utiliza el método
 en cada uno para mostrar su descripción en la página.

Objetivos:

Practicar la creación y uso de objetos y métodos.
*/

const Libro = [
    {
        titulo:"La comunidad del anillo",
        autor:"J.R.R Tolkien",
        paginas: 423,
        resumen: function(){
            console.log(`Título: ${this.titulo},Autor: ${this.autor}, Nº págs: ${this.titulo}.`)
        }
    },
    {   
        titulo:"Las dos Torres",
        autor:"J.R.R Tolkien",
        paginas: 352,
        resumen: function(){
            console.log(`Título: ${this.titulo},Autor: ${this.autor}, Nº págs: ${this.titulo}.`)
        }
    },
    {   
        titulo:"El retorno del rey",
        autor:"J.R.R Tolkien",
        paginas: 432,
        resumen: function(){
            console.log(`Título: ${this.titulo},Autor: ${this.autor}, Nº págs: ${this.titulo}.`)
        }
    }
];

Libro.forEach(libro => {
    console.log(libro.resumen())
});