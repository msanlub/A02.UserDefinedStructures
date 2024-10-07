/*
Ejercicio 18: Sistema de Cálculo de Descuentos
La empresa "Descuentos Mágicos S.L." quiere implementar un sistema para calcular descuentos en productos. El sistema debe permitir calcular el precio final de un producto después de aplicar uno o varios descuentos.

Crea una función calcularPrecioFinal(precioBase, descuentos) que reciba dos parámetros:

precioBase: un número que representa el precio original del producto.
descuentos: un array de números que representan los porcentajes de descuento a aplicar.

La función debe aplicar cada descuento secuencialmente sobre el precio base. Por ejemplo, si el precio base es 100 y se aplican descuentos del 10% y 20%, el cálculo debería ser:

Aplicar el 10%: 100 - (100 * 0.10) = 90
Aplicar el 20%: 90 - (90 * 0.20) = 72

La función debe validar que el precio base sea un número positivo y que cada descuento esté en el rango de 0 a 100. Si algún descuento no es válido, debe lanzar un error con un mensaje adecuado.

Además, crea una función adicional mostrarPrecioFinal(precioBase, descuentos) que llame a calcularPrecioFinal y muestre el resultado en la consola con un mensaje amigable, por ejemplo: "El precio final después de aplicar los descuentos es: X".

Objetivos:

Practicar la creación y uso de funciones.
Mejorar la gestión de arrays y la validación de entradas.
*/

function indicarPrecio(){
    let precio;
    do{
        precio = parseFloat(prompt ("Indica el precio al que aplicar descuento: "));
    }while (isNaN(precio) || precio < 0)
    
    return precio;
}

const descuentos = [0.10,0.20]

function calcularPrecioFinal (precioBase,descuentos){
    let precioFinal = precioBase;

    descuentos.forEach(descuento => {
        precioFinal -= precioFinal * descuento;
    });
    
    if (precioFinal < 0 || precioFinal > 100){
        throw new Error("No se puede realizar el descuento.");
    }
    
    return precioFinal;
}

function mostrarPrecioFinal() {
    const precioBase = indicarPrecio(); 
    try {
        const precioFinal = calcularPrecioFinal(precioBase, descuentos);
        console.log(`El precio final después de aplicar los descuentos es: ${precioFinal}€`);
    } catch (error) {
        console.error(error.message); 
    }
}

mostrarPrecioFinal();