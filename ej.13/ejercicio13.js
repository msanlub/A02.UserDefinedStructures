/**
 * Ejercicio 13: Reducción de Datos
Implementa una función calcularSumaPrecios() que reciba un array de objetos con propiedades nombre y precio, y devuelva la suma total de todos los precios utilizando reduce().

Objetivos:

Practicar el uso del método reduce() en arrays.
Aprender a manejar objetos y propiedades dentro de un array.

*/

const carrito = [
	{name:"mesa",price: "50.4"},
	{name:"raton",price: ","},
	{name:"tele",price: "230"},
	{name:"pc",price: "300"},
	{name:"auriculares",price: "2.3"},
	{name:"tablet",price: "355"},
]


function filtrarCarrito(){
    const carritoFiltrado = carrito.filter((producto) => !isNaN(parseFloat(producto.price)));
    return carritoFiltrado;
}

function calcularSumaPrecios() {
    const carritoOk = filtrarCarrito();
    const totalCarrito = carritoOk.reduce((total,producto) => {
        return total + parseFloat(producto.price)
    },0);

    return totalCarrito;
}

function mostrarResultado() {
    const total = calcularSumaPrecios();
    console.log(`El total del carrito son ${total} €.`)
}

mostrarResultado();
