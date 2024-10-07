/**
 * Ejercicio 16: Juego de Aventura
La empresa "Aventuras Fantásticas S.L." está desarrollando un juego de aventura en el que los jugadores explorarán un mundo lleno de criaturas mágicas. Necesitan crear una estructura de datos para representar a los personajes del juego.

La estructura de datos en esta fase del desarrollo será la de un objeto, en el que se necesitará de cada personaje las siguientes propiedades:

Nombre
Raza (por ejemplo, "Humano", "Elfo", "Enano")
Nivel (comenzará en 1)
Puntos de Vida (comenzará en 100)

Además, para hacer pruebas, se almacenarán los personajes en un array. Inicialmente habrá 2 personajes precargados en el sistema.

Se deberán crear métodos para gestionar el combate:

Atacar: Cuando un personaje ataque, se deberá restar una cantidad de puntos de vida al enemigo (por ejemplo, 10 puntos por ataque).
Recuperar Vida: Se deberá crear un método que permita al personaje recuperar vida. Al recuperar, se sumarán 20 puntos de vida, pero no se podrá exceder el máximo de 100 puntos.
Subir Nivel: Cada vez que un personaje alcance 0 puntos de vida, se deberá mostrar un alerta indicando que el personaje ha sido derrotado y restablecerlo a su estado inicial (nivel 1 y 100 puntos de vida).
*/

const personajes = [
    {nombre: "Aragorn", raza: "Hombre", nivel: 1, puntosDeVida: 100},
    {nombre: "Legolas", raza: "Elfo", nivel: 1, puntosDeVida: 100},
    {nombre: "Thorin", raza: "Enano", nivel: 1, puntosDeVida: 100},
    {nombre: "Gandalf", raza: "Mago", nivel: 1, puntosDeVida: 100},
]

function atacar(atacante,enemigo){
    const DAÑO = 10;
    enemigo.puntosDeVida -= DAÑO;
    console.log(`${atacante.nombre} ataca a ${enemigo.nombre}.`);
    console.log(`${enemigo.nombre} ahora tiene ${enemigo.puntosDeVida} puntos de vida.`);

    if (enemigo.puntosDeVida <= 0){
        subirNivel(enemigo)
    }
}

function recuperarVida(personaje){
    if( personaje.puntosDeVida < 100){
        personaje.puntosDeVida += 20;
        if(personaje.puntosDeVida >= 100){
            console.log(`${personaje.nombre} ya tiene el máximo de vida.`)
            personaje.puntosDeVida = 100;
        }
        console.log(`${personaje.nombre} recupera vida y ahora tiene ${personaje.puntosDeVida} puntos de vida.`);
    }else{
        personaje.puntosDeVida = 100;
        console.log(`${personaje.nombre} ya tiene el máximo de 100 puntos de vida.`);
    }

    return personaje.puntosDeVida;
}

function subirNivel(personaje){
    if (personaje.puntosDeVida === 0){
        alert(`${personaje.nombre} derrotado.`);
        personaje.nivel = 1;
        personaje.puntosDeVida = 100;
    }
}


atacar(personajes[0], personajes[1]);
recuperarVida(personajes[1]);
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
recuperarVida(personajes[0]);
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
atacar(personajes[1], personajes[0]); 
