import { valorCarta } from "./valor-carta";

/**
   * Esta funcion me permite acumular los puntos
   * @param {Number} turno 
   * @param {String} carta 
   * @param {Array<String>} puntosJugadores 
   * @param {Array<String>} puntosHTML 
   * @returns 
   */
  export const acumularPuntos = (turno, carta, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };