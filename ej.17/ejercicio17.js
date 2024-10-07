/**
 * Ejercicio 17: Sistema de Gestión de Inventario
La empresa "Tienda de Fantasía S.L." está desarrollando un sistema de gestión de inventario para sus productos mágicos. Necesitan una estructura de datos para representar cada producto.

Crea una clase Producto con las siguientes propiedades:

Nombre
Categoría (por ejemplo, "Poción", "Varita", "Libro")
Precio
Cantidad en Stock (comenzará en 0)

Crea un método actualizarStock(cantidad) que permita aumentar o disminuir la cantidad en stock de un producto. Si la cantidad resultante es menor que 0, la cantidad debe establecerse en 0.

Implementa una clase Inventario que contenga un array de objetos Producto. Esta clase debe tener métodos para:

Agregar un nuevo producto al inventario.
Eliminar un producto por su nombre.
Buscar un producto por su nombre y mostrar su información.

Implementa validaciones para asegurarte de que los datos de entrada (como el precio y la cantidad en stock) sean válidos y no provoquen errores inesperados.

Objetivos:

Practicar el uso de clases y objetos.
Implementar lógica de gestión de inventario y validaciones.
 */

class Producto {
    constructor(Nombre,Categoria,Precio,Stock){
        this.Nombre = Nombre,
        this.Categoria = Categoria,
        this.Precio = Precio,
        this.Stock = Stock,

        this.validarDatos()
    }

    validarDatos(){
        if (isNaN(this.Precio) || this.Precio < 0) {
            throw new Error('Error de precio de producto.');
        }
        if (!Number.isInteger(this.Stock)) {
            throw new Error('Error de cantidad de stock.');
        }
    }

    actualizarStock(cantidad){
        this.Stock += cantidad;
        if (this.Stock <= 0){
            this.Stock = 0;
        }
    }
}


class Inventario {
    constructor(){
        this.productos = []
    }
    
    agregarProducto(producto) {
        if (!(producto instanceof Producto)) {
            throw new Error('Se debe proporcionar una instancia de la clase Producto.');
        }
        this.productos.push(producto);
        console.log(`Producto agregado: ${producto.Nombre}`);
    }

    borrarProducto(nombre){
        const productoABorrar = this.productos.findIndex((producto) => producto.nombre === nombre)

        if (productoABorrar !== -1){
            this.productos.splice(productoABorrar,1)
            console.log(`Producto eliminado: ${nombre}`);
        } else {
            console.log(`El producto "${nombre}" no se encontró en el inventario.`);
        }
    
    }

    informacionProducto(nombre) {
        const producto = this.productos.find((producto) => producto.nombre === nombre);
        
        if (!producto) {
            console.log(`El producto "${nombre}" no se encontró en el inventario.`);
            return;
        }
        
        console.log(`Producto: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: ${producto.precio}€, Disponibilidad en stock: ${producto.stock}`);
    }

}


const inventario = new Inventario();

// Crear algunos productos
const pocionVida = new Producto('Poción de Vida', 'Poción', 10, 5);
const varitaMagica = new Producto('Varita Mágica', 'Varita', 15, 2);

// Agregar productos al inventario
inventario.agregarProducto(pocionVida);
inventario.agregarProducto(varitaMagica);

// Buscar un producto
inventario.informacionProducto('Poción de Vida');

// Actualizar el stock de un producto
pocionVida.actualizarStock(4); 
inventario.informacionProducto('Poción de Vida'); 
pocionVida.actualizarStock(-2); 
inventario.informacionProducto('Poción de Vida'); 

// Eliminar un producto
varitaMagica.actualizarStock(4); 
inventario.informacionProducto('Poción de Vida'); 
inventario.borrarProducto('Varita Mágica');
inventario.informacionProducto('Varita Mágica'); 