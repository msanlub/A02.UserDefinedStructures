/*Ejercicio 11: Simulación de Dados
Escribe un script que simule el lanzamiento de 2 dados utilizando Math.random(). Haz 36,000 lanzamientos y muestra cuántas veces ha salido cada resultado.

Objetivos:

Practicar el uso de funciones aleatorias y bucles.
*/

function generarDados(){

    let dado = Math.floor(Math.random() * 6) + 1;

    return dado;
}

function tirarDados(){

    let resultados = {};

    for ( let i = 0; i < 36000; i++){
        let dado1 = generarDados();
        let dado2 = generarDados();

        let sumaDados = dado1 + dado2;

        if (resultados[sumaDados]){
            resultados[sumaDados]++;
        }else{
            resultados[sumaDados] = 1;
        };
    }

    return resultados;
}

function mostrarResultados(juego) {
    console.log("Resultados: ");
    for ( let veces in juego){
        console.log(`${veces} -> ${juego[veces]} veces.`)
    }
}

let juego = tirarDados();
mostrarResultados(juego);