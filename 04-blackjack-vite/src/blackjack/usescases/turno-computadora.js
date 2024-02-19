import { pedirCarta } from "./pedir-carta";
import { determinarGanador } from "./determinar-ganador"; 
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
/**
 * Funcion que ejecuta el turno de la computadora
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck Es el deck del juego actual
 * @param {Array<String>} puntosJugadores Es el arreglo con los puntos de los jugadores
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, document) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta, puntosJugadores, document.querySelectorAll("small"));
      crearCarta(puntosJugadores.length - 1, carta, document, document.querySelectorAll(".divCartas"));
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    determinarGanador(puntosJugadores);
  };
