/**
 * Esta funcion me permite crear una carta.
 * @param {Number} turno 
 * @param {String} carta 
 * @param {HTML} document 
 * @param {Array<String>} divCartasJugadores 
 */
export const crearCarta = (turno, carta, document, divCartasJugadores) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };